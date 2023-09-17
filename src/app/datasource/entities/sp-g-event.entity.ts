import { Entity, Column, BeforeInsert } from 'typeorm';
import generateId from 'common/gen-id';
import { AbstractEntity } from '.';

@Entity({ name: 'sp_google_event' })
export class SPGoogleEvent extends AbstractEntity<SPGoogleEvent> {
  @Column()
  eventId: string;

  @Column({
    default: '',
  })
  eventRecurringId: string;

  @Column()
  summary: string;

  @Column({
    default: '',
  })
  description: string;

  @Column({ type: 'timestamptz' })
  startedAt: Date;

  @Column({ type: 'timestamptz' })
  finishedAt: Date;

  @Column({
    default: '',
  })
  meetingLink: string;

  @Column()
  eventLink: string;

  @Column({
    default: '[]',
  })
  members: string;

  // Actions
  @BeforeInsert()
  _updateId() {
    this.id = generateId('SP_GEvent', this.id);
  }
}
