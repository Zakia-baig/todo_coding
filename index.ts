#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold("\n       WELCOME TO MY TO DO APP :     \n"));

let Todolist:string[]=[];
let condition= true;

let main = async () =>{
  while(condition){
    let option = await inquirer.prompt([{
      name:"choice",
      type:"list",
      message:chalk.green.bold("select an option you want to do :"),
      choices:["Add","Delete","Update", , "View todo list" ,"Exit" ],
    }
  ]);
  if(option.choice==="Add"){
    await addtask()

  }
  else if(option.choice==="Delete"){
    await deletetask()
  }
  else if(option.choice==="Update"){
    await updatetask()
  }
else if(option.choice==="View todo list"){
   await viewtask()
}
else if(option.choice==="Exit"){
  condition=false;
}
  }
}
let addtask = async() =>{

let newtask =await inquirer.prompt([{
  name: "task",
  type: "input",
  message:chalk.green.bold ( "Enter your new task :"),
}
]);
Todolist.push(newtask.task);

console.log( chalk.blue (`${newtask.task} task added successfully in Todolist   `))

}

let viewtask=()=> {
  console.log("\n Your Todolist:\n");
  Todolist.forEach((task,index)=>{
    console.log(chalk.blue    (`${index } : ${task}`))
  })

}

// Function of delete task from the list
let deletetask= async()=>{
  await viewtask()
  let taskindex= await inquirer.prompt([{
    name: "index",
    number: "number",
    message:chalk.green.bold("Enter the 'index no .' of the task you want to delete")

  }
]);
let deletedtask=Todolist.splice(taskindex.index ,1 );
console.log( chalk.blue  (`\n ${deletedtask}this task has been deleted successfully from your todo -list \n`))

}

// Function to update task from the list

let updatetask=async()=>{
  await viewtask()
  let Update_task_index= await inquirer.prompt([{

   name: "index",
   type: "number",
   message:chalk.green.bold("Enter the index of the task you want to UPDATE :")

  },
  {
    name:"new_task",
    type: "input",
    message:chalk.green.bold( "Now enter new task name :")
  }
]);
Todolist[Update_task_index.index ] = Update_task_index.new_task
console.log(chalk.blue(`\n Task at index no.${Update_task_index .index} updated successfully [for updated list check option : "View todo list"]`))
}

main();
















