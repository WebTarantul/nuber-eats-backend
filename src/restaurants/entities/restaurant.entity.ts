import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Column()
  @Field((is) => String)
  @IsString()
  name: string;

  @Column({
    default: true,
  })
  @Field((type) => Boolean, { defaultValue: true })
  @IsBoolean()
  @IsOptional()
  isVegan: boolean;

  @Column()
  @Field((type) => String)
  @IsString()
  @Length(2, 15)
  address: string;

  @Column()
  @Field((type) => String)
  @IsString()
  @Length(2, 20)
  ownerName: string;

  @Column()
  @Field((type) => String)
  @IsString()
  categoryName: string;

  @Column()
  @Field((type) => Number)
  @IsInt()
  tablesAmount: number;
}
