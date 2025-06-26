import axios from "axios";

import chalk from "chalk";

import "dotenv/config";
console.log(process.env.SECRET_KEY);

const text = process.argv[2];
console.log(chalk.blue(`Hello ${text}`));

axios({
    method: "get",
    url: "https://lanciweb.github.io/demo/api/pictures/",
}).then(function (response) {
    console.log(response.data);
});
