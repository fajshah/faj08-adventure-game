#!/usr/bin/env node
// typescript project adventure game
import inquirer from "inquirer";
import chalk from "chalk";

class Hero {
    name: string;
    fuel : number = 100

    constructor(name: string) {
        this.name = name;
    }

    fuelDecrease (){
      let fuel = this.fuel - 20
      this.fuel = fuel
    }

    fuelIncrease (){
        this.fuel = 100
    }
};

//for enemy

class Enemy {
    name: string;
    fuel = 100

    constructor(name: string){
        this.name = name;
    }

    fuelDecrease (){
    let fuel = this.fuel - 20
     this.fuel = fuel
    }

    fuelIncrease(){
        this.fuel = 100
    }
}

//step # 02 Player object

    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter Your Player Name:"
        }
    ]);

    //step # 02 enemy object

    const { enemyType} = await inquirer.prompt ([
        {
            type: "list",
            name: "enemyType",
            choices: ["zombie", "alien", "witch"],
            message: "select the enemy you fight with:"
        }
    ]);

    //step # 03 Battle field
    const hero = new Hero (heroName);
    const enemy = new Enemy (enemyType);

    console.log((chalk.greenBright)( `${enemy.name} v/s ${hero.name}`))

    //step # 04 Action

    do{
        const { action } = await inquirer.prompt([
            //action object
            {
                type: "list",
                name: "action",
                choices: ["attack", "defend", "range target", "run"],
                message: "choose the attack type to perform action"

        }]);

       // step # 05 switch case

       switch (action){
        case "attack":
            const randomNum = Math.random();
            if( randomNum > 0.5 ){

                //hero health decrease
             hero.fuelDecrease();
             console.log((chalk.yellowBright)(`${hero.name} health: ${hero.fuel}`));
             console.log((chalk.yellowBright)(`${enemy.name} health: ${enemy.fuel}`));
             if(hero.fuel <= 0){
                console.log((chalk.redBright)("You loss! try again"))
                process.exit()
             }
            } else {
                //enemy health decrease
                enemy.fuelDecrease();
                console.log((chalk.yellowBright)( `${hero.name} health: ${hero.fuel}`));
                console.log((chalk.yellowBright)( `${enemy.name} health: ${enemy.fuel}`));
                if (enemy.fuel <= 0){
                    console.log((chalk.greenBright)("Congratulation! You win"))
                    process.exit()
                }
            }
            break;
       }

    } while(true);


