const cron = require('node-cron');
const consoleJob = require('./jobs/consolelog')


module.exports = () =>{
    var consoleTask = cron.schedule('25 * * * * *', () =>  {
        consoleJob.console();
      });

      consoleTask.start();
}
  