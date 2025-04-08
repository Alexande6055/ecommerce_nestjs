import { NestFactory } from "@nestjs/core";
import { AppModule } from './app.module';
import { FirebaseGuard } from "./guard/firebase.guard";
import { ValidationPipe } from "@nestjs/common";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const firebaseGuard = app.get(FirebaseGuard);
  app.useGlobalGuards(firebaseGuard);
  // Configuración global del ValidationPipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Convierte el payload a los tipos correspondientes
    whitelist: true, // Elimina propiedades no especificadas en el DTO
    forbidNonWhitelisted: true, // Lanza error si llega una propiedad no definida en el DTO
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
