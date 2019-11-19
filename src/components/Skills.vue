<template>
<div class="container">
    <div class="holder">

        <form @submit.prevent="addSkill">
            <input type="text" placeholder="Enter Your Skills Here.." v-model="skill"> {{skill}}
           
        </form>

        <ul>
            <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class=" animated bounceOutDown">
                <li v-for="(value,index) in skills" :key="index">{{value.skill}}
                    <i class="fa fa-minus-circle" @click="remove(index)"></i>   
                </li>
                
            </transition-group>
        </ul>

        <p>These are the skills that you posses</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Skills',
    data() {
        
        return{ 
            skills:[
                {"skill":"Vue.js"},
                {"skill":"React.js"},
            ],
            skill:'',
            
        } 
       
        
    },
    methods:
    {
        addSkill()
        {
            this.skills.push({skill:this.skill})
            this.skill=''
            
        },
        remove(id)
        {
            this.skills.splice(id,1);
        }
    }
    
}

</script>

<style scoped>

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  .holder {
    background: #fff;
  }

   ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

   p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  i{
      float: right;
      cursor: pointer;
  }

</style>

