import { watchFile, unwatchFile } from 'fs';

import chalk from 'chalk';

import { fileURLToPath } from 'url';

import fs from 'fs';

import axios from 'axios';

import fetch from 'node-fetch';

/*close gc */

export async function closegc() {

    const moment = (await import('moment-timezone')).default;

    let data = fs.readFileSync("./function/database/grup.json");

    let json = JSON.parse(data);

    const time = moment.tz('Africa/Casablanca').format('HH:mm');

    for (let schedule of json) {

        try {

            let anon = (await conn.groupMetadata(schedule)).announce;

            if (time === '00:00' && anon === false) {

                await conn.groupSettingUpdate(schedule, 'announcement');

                await conn.delay(1000);

                await conn.reply(schedule, '*[إشعار النظام]*\n\n```مرحبًا بالجميع، آسف لإزعاجك. سيتم إغلاق نظام مجموعة الواتس اب مؤقتا بسبب وقت متأخر من الليل. نأسف للإزعاج. من فضلك خذ قسطًا من الراحة وسنواصل المحادثة صباح الغد. نشكركم على تفهمكم وتعاونكم. طاب مساؤك!```', null);

            } else if (time === '05:30' && anon === true) {

                await conn.groupSettingUpdate(schedule, 'not_announcement');

                await conn.delay(1000);

                await conn.reply(schedule, '*[إشعار النظام]*\n\n```صباح الخير أيها الأصدقاء! نرجو أن يكون هذا اليوم مليئًا بالحماس والسعادة. لنبدأ اليوم بمعنويات عالية ونشارك الخير في مجموعتنا على الواتساب. أتمنى لك يومًا سعيدًا ونأمل أن يكون اليوم يومًا مثمرًا وممتعًا لنا جميعًا.```', null);

            } else if (time === '18:00' && anon === false) {

                await conn.groupSettingUpdate(schedule, 'announcement');

                await conn.delay(1000);

                await conn.reply(schedule, '*[إشعار النظام]*\n\n```مرحبًا بالجميع! سيتم إغلاق نظام مجموعة الواتس اب مؤقتا بسبب دخول وقت غروب الشمس. يرجى أخذ استراحة قصيرة والاستمتاع بوقت مع العائلة أو القيام بأنشطة أخرى. سنعيد فتح نظام المجموعة هذا بعد وقت المغرب. نشكركم على تفهمكم وتعاونكم. أتمنى لك راحة جيدة!```', null);

            } else if (time === '18:10' && anon === true) {

                await conn.groupSettingUpdate(schedule, 'not_announcement');

                await conn.delay(1000);

                await conn.reply(schedule, '*[إشعار النظام]*\n\n```مساء الخير للجميع! تم فتح نظام مجموعة الواتساب بعد غروب الشمس. نأمل أن نكون قد قمنا جميعًا بعبادتنا بشكل جيد وحصلنا على البركات اليوم. دعونا نتشارك القصص والمعلومات والسعادة معًا في هذه المجموعة. مرحبا بكم ونأمل أن نقضي وقتا ممتعا!```', null);

            }

        } catch (e) {

            json.splice(json.indexOf(schedule), 1);

            fs.writeFileSync('./function/database/grup.json', JSON.stringify(json));

            return json;

        }

    }

}

// بقية الوظائف كما هي بدون تعديل

export async function regex(string) {

    return string.replace(/[.*=+:\-?^${}()|[\]\\]|\s/g, '\\$&');

}

export async function delay(ms) {

    return new Promise(res => setTimeout(res, ms));

}

// جميع الدوال الأخرى تم الاحتفاظ بها

// بدون أي أكواد تتعلق بـ ytdl-core
