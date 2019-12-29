export interface Event {
    eventID? : string,
    eventName: string;
    participants: string[];
    cost: number;
    paidBy: string;

    /* constructor(ename: string, eparticipants: string[], ecost: number, epaidby: string){
        this.eventName = ename;
        this.participants = eparticipants;
        this.cost = ecost;
        this.paidBy = epaidby;
    } */
}
