import Ride from './Ride';

/** Ticket {
id (integer, optional),
ride (Ride, optional),
access_code (string, optional): The ticket's access code ,
return_time (string, optional): The return time for FastRider access
} */
class Ticket {
    constructor(t = {}) {
        this.id = t.id || null;
        this.ride = new Ride(t.ride) || null;
        this.access_code = t.access_code || null;
        this.return_time = t.return_time || null;
    }
}

export default Ticket;