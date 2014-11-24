
module.exports = {
    service: {
        restart: {
            shellCommand: 'sudo -S service realtime restart < passwd'
        },
        stop: {
            shellCommand: 'sudo -S service realtime stop < passwd'
        },
        start: {
            shellCommand: 'sudo -S service realtime start < passwd'
        }
    }
};
