import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  private readonly logger = new Logger('AppService');

constructor(
  @InjectConnection() private connection: Connection,
){}

async onModuleInit(){
  //console.log('Conectando a la base de datos');
  //await this.connection.connect();
  const isConnected = this.connection.readyState === 1;
  this.logger.log(`MongoDB conection status: ${isConnected ? 'Connected' : 'Disconnected'}`);

}
}
