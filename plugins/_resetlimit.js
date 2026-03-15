import cron from "node-cron";

export async function before(m) {
  let bot = db.data.settings[conn.user.jid];

  let schedule;

  if (schedule !== true) {
    cron.schedule(
      "0 00 00 * * *",
      async () => {
        let data = Object.keys(db.data.users);

        let grup = Object.keys(db.data.chats).filter((v) =>
          v.endsWith("@g.us"),
        );

        let user = db.data.users;

        for (let usr of data) {
          if (user[usr].limit < 7) {
            user[usr].limit = 250;
          }
        }
      },
      {
        scheduled: true,

        timezone: "Africa/Casablanca",
      },
    );

    schedule = true;
  }
}
