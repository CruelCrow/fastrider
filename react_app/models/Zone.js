/** Zone {
id (integer, optional),
name (string, optional): The zone's name ,
color (string, optional): The zone's color in hex format (e.g. #ffffff)
} */
class Zone {
    constructor(z = {}) {
        this.id = z.id || null;
        this.name = z.name || null;
        this.color = z.color || null;
    }
}

export default Zone;