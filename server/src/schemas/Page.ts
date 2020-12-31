import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn
} from 'typeorm'

@Entity('pages')
class Page {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @Column()
  path: string

  @Column()
  deepLink: string

  @Column({ default: false })
  shared: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}

export default Page
