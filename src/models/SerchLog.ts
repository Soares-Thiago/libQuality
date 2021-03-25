import {Schema, model, Document} from 'mongoose'

export interface ISearchLog extends Document{
  user: string
  repository: number
  createdAt: Date
  updatedAt: Date
}

const SearchLogModel = new Schema({
  user: {type: String, required: true},
  repository: {type: String, required: true},
},{
  timestamps: true
})


export default model<ISearchLog>('SeachLog',SearchLogModel)