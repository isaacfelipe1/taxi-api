import prisma from '../src/config/database';

async function main() {
  await prisma.driver.createMany({
    data: [
      {
        name: 'Homer Simpson',
        rate: 2.5,
        is_active: true,
        description:
          'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
        car: 'Plymouth Valiant 1973 rosa e enferrujado',
        rating: 2,
        min_distance: 1,
      },
      {
        name: 'Dominic Toretto',
        rate: 5,
        is_active: true,
        description:
          'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.',
        car: 'Dodge Charger R/T 1970 modificado',
        rating: 4,
        min_distance: 5,
      },
      {
        name: 'James Bond',
        rate: 10,
        is_active: true,
        description:
          'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.',
        car: 'Aston Martin DB5 clássico',
        rating: 5,
        min_distance: 10,
      },
    ],
  });
  console.log('Motoristas inseridos com sucesso!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
