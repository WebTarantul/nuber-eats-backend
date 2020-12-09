import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryColumn()
  @Field((type) => Number)
  id: number;

  @Column()
  @Field((is) => String)
  name: string;

  @Column()
  @Field((type) => Boolean, { nullable: true })
  isVegan: boolean;

  @Column()
  @Field((type) => String)
  address: string;

  @Column()
  @Field((type) => String)
  ownerName: string;

  @Column()
  @Field((type) => String)
  categoryName: string;

  @Column()
  @Field((type) => Number)
  tablesAmount: number;
}
