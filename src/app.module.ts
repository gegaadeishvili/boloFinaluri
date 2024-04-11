import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { DatabaseModule } from './database.module';
import { AuthController } from './auth.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    JwtModule.register({
    secret: '5fa2048055852ecd3e0e268a0deea9791ca2879535a6754100a21aa0f6d31569', // Укажите ваше секретное ключевое слово здесь
    signOptions: { expiresIn: '1h' }, // Настройте время жизни токена по вашему усмотрению
  }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService],
})
export class AppModule {}
