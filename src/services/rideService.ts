import axios from 'axios';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_API_KEY;
export interface RouteDetails {
  distance: string;
  duration: string;
  start_location: { lat: number; lng: number };
  end_location: { lat: number; lng: number };
  points: string;
}

export const getRouteDetails = async (
  origin: string,
  destination: string
): Promise<RouteDetails> => {
  const url = `https://maps.googleapis.com/maps/api/directions/json`;

  try {
    const response = await axios.get(url, {
      params: {
        origin,
        destination,
        key: GOOGLE_MAPS_API_KEY,
      },
    });

    const route = response.data.routes[0];
    if (!route) {
      throw new Error('Nenhuma rota encontrada entre os pontos fornecidos.');
    }

    const leg = route.legs[0];
    return {
      distance: leg.distance.text,
      duration: leg.duration.text,
      start_location: leg.start_location,
      end_location: leg.end_location,
      points: route.overview_polyline.points,
    };
  } catch (error: any) {
    throw new Error(`Erro ao calcular rota: ${error.message}`);
  }
};
