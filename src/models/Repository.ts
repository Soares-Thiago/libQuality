import {Schema, model, Document} from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface IRepository extends Document{
  name: string
  issues: number
  avg_age: number
  std_age: number
  createdAt: Date
  updatedAt: Date
}

const RepositoryModel = new Schema({
  name: {type: String, required: true, unique: true},
  issues: {type: Number, required: true},
  avg_age: {type: Number, required: true},
  std_age: {type: Number, required: true}
},{
  timestamps: true
})

RepositoryModel.plugin(uniqueValidator)

export default model<IRepository>('Repository',RepositoryModel)