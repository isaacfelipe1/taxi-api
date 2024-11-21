import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './docs/swagger';
import rideRoutes from './routes/rideRoutes';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.use('/ride', rideRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
