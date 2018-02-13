const Constants = {
    FASTRIDER_API_ERRORS: {
        ERR_NETWORK: -1,
        ERR_GENERIC: 0,
        ERR_TOKEN: 401,
        ERR_NOT_FOUND: 404,
        ERR_SERVER: 500,
        ERR_WORKING_HOURS: 503,
        ERR_PIN: 4000,
        ERR_RIDE_ID: 4001,
        ERR_ONE_TICKET: 4002,
        ERR_NO_TICKETS: 4003,
        ERR_NO_RIDE_SELECTED: 10000,
    },

    FASTRIDER_API_ERROR_MESSAGES: {
        '-1': 'Network error',
        '0': 'Unknown error',
        '401': 'Invalid or expired user token',
        '404': 'Resource not found',
        '500': 'Server error',
        '503': 'Cannot assign FastRider tickets outside of working hours',
        '4000': 'Invalid park ticket PIN number',
        '4001': 'Invalid park ride id',
        '4002': 'Only one FastRider ticket can be held at any given time',
        '4003': 'No FastRider tickets are available at the moment',
        '10000': 'No ride selected'
    },

    ACTIONS: {
        START_LOADING: Symbol(),
        END_LOADING: Symbol(),

        GET_RIDES: Symbol(),
        GET_TICKET: Symbol(),

        LOAD_PIN: Symbol(),
        SAVE_PIN: Symbol(),
    }
};

export default Constants;
