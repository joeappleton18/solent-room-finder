import {model, Model, models, Schema} from "mongoose";

interface TypeInterface {
  code: string;
  name: string;
}

export interface RoomInterface {
  _id?: string;
  photos?: string | string[];
  number: string;
  building: string;
  capacity: number;
  notes?: string;
  type: string | TypeInterface; // the reason we allow a string here is we need to represent type as a singular value in the form
}
/**
 *  id: string;
  public_id: string;
  tmp: boolean;
 */
const roomSchema = new Schema<RoomInterface, Model<RoomInterface>>({
  photos: {type: [String]},
  building: {type: String, required: true},
  number: {type: String, required: true},
  capacity: {type: Number, required: true},
  notes: {type: String},
  type: {
    code: {type: String, required: true},
    name: {type: String, required: true},
  },
});

export default (models.Room as Model<RoomInterface>) ||
  model<RoomInterface>("Room", roomSchema);
