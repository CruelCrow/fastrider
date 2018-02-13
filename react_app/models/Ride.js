import Zone from './Zone';

/** Ride {
    id (integer, optional),
        zone (Zone, optional),
        name (string, optional): The ride's name ,
    remaining_tickets (integer, optional): The number of remaining FastRider tickets ,
        return_time (string, optional): The current return time for FastRider tickets
} */
class Ride {
    constructor(r = {}) {
        this.id = r.id || null;
        this.zone = new Zone(r.zone) || null;
        this.name = r.name || null;
        this.remaining_tickets = r.remaining_tickets || 0;
        this.return_time = r.return_time || null;
    }
}

export default Ride;