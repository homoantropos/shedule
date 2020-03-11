import { Participators } from './eventscodes/participators';
import { Direction } from './eventscodes/direction';
import { Status } from './eventscodes/status';
import { Owners } from './eventscodes/owners';
import { Kindofactivity } from './eventscodes/kindofactivity';
import { Abbrevition } from './eventscodes/abbrevition';

export class Event {
  fullname: string;
  name: string;
  start: string;
  end: string;
  days: number;
  place: string;
  participants: Participators;
  direction: Direction;
  status: Status;
  owner: Owners;
  kind: Kindofactivity;
  abbr: Abbrevition;

  constructor(
    fullname: string,
    name: string,
    start: string,
    end: string,
    days: number,
    place: string,
    participants: Participators,
    direction: Direction,
    status: Status,
    owner: Owners,
    kind: Kindofactivity,
    abbr: Abbrevition,
  ) {
    this.fullname = fullname;
    this.name = name;
    this.start = start;
    this.end = end;
    this.days = days;
    this.place = place;
    this.participants = participants;
    this.direction = direction;
    this.status = status;
    this.owner = owner;
    this.kind = kind;
    this.abbr = abbr;
  }
}
