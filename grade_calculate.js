const calcy=()=>{

    const bangla=document.getElementById('bd').value

const english=document.getElementById('eg').value

const math=document.getElementById('math').value

const biology=document.getElementById('bio').value

const ict=document.getElementById('ict').value

const physics=document.getElementById('phy').value

const chemistry=document.getElementById('che').value

const totalMarks=parseFloat(bangla)+parseFloat(english)+parseFloat(math)+parseFloat(biology)+parseFloat(physics)+parseFloat(chemistry)+parseFloat(ict)

console.log(totalMarks)

const percentage=(totalMarks/700)*100

let grades=''

if(percentage<=100 && percentage>=80)
{

    grades='A+'

}

else if(percentage<=79 && percentage>=70)
{

    grades='A'

}

else if(percentage<=69 && percentage>=60)
{

    grades='A-'

}

else if(percentage<=59 && percentage>=50)
{

    grades='B'

}

else if(percentage<=49 && percentage>=40)
{

    grades='C'

}

else if(percentage<=39 && percentage>=33)
{

    grades='D'

}

else{
    grades='F'
}

if(percentage >= 33)
{

    document.getElementById('showData').innerHTML = ` Out of 700 your total is  ${totalMarks} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Pass. `

  }

  else
  {

    document.getElementById('showData').innerHTML = `  Out of 700 your total is  ${totalMarks} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Fail. `

  }


}