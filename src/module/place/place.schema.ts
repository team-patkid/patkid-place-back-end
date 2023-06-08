import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ResultPlace } from '../user/dto/user.dto';

export type QuestionDocument = HydratedDocument<Place>;


@Schema({
  timestamps: true,
  collection: 'PLACE',
  _id: true,
})
export class Place {
  @Prop({ required: true })
  public mbti: string;

  @Prop({ required: false })
  public features?: string;

  @Prop({ required: true })
  public title: string;

  @Prop({ _id: false, type: [{
    image: { _id: false, required: true, type: String },
    name: { _id: false, required: true, type: String },
    tag: { _id: false, required: true, type: [ String ] },
    latitude: { _id: false, required: true, type: String },
    longitude: { _id: false, required: true, type: String },
    link: { _id: false, required: true, type: String },
  }] })
  public place: Array<ResultPlace>;

  @Prop({ required: false })
  public count?: number;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
