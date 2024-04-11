import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb+srv://GegaGeorgianHero:PiF9uTZpxmkI9Rop@gegalab.krmvsiy.mongodb.net/gegashop'),
  ],
})
export class DatabaseModule {}