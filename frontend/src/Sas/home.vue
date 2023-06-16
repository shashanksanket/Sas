
<template>
	<div>
		<div>


			<div style=" height:100%; margin-top: 40px;">
				<center>
					<h2>Welcome To SAS Pvt Ltd</h2>
				</center>
			</div>
			
			<div style="margin-top: 20%;" class="chatUI">
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="message in messages" :key="message.id" class="chat-message">
        <div class="message-sender">You</div>
        <div class="message-content">{{ message.text }}</div>
      </div>
    </div>
    <div style="display: flex;" class="chat-input">
      <b-form-input style="width: 100%;;" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
      <b-button style="margin-left: 2%;" variant="primary" @click="sendMessage">Send</b-button>
    </div>
  </div>






			</div>
			

			<v-idle @idle="onidle" style="display:none" :duration="900" />
		</div>
		
	</div>
</template>
<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
	BSidebar, BProgressBar,BInput, BModal, BProgress, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import store from '@/store'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import { mapMutations, mapActions, mapState } from "vuex";
import Password from "vue-password-strength-meter";
// import { jsonToCSV } from 'vue-papaparse'
import VuePapaParse from 'vue-papa-parse'
import Papa from 'papaparse'
import { positive } from '@/@core/utils/validations/validations'
import Vidle from 'v-idle'


export default {
	components: {
		BSidebar,
		BForm,
		BFormFile,
		BFormGroup,
		BFormInput,
		BFormInvalidFeedback,
		BButton,
		BInput,
		vSelect,
		BModal,
		Vidle,
		BProgressBar,
		// Form Validation
		ValidationProvider,
		ValidationObserver,
		VuePhoneNumberInput,
		Password,
		BProgress,
	},
	model: {

	},
	props: {


	},
	data() {
		return {
			success: false,
			max: 100,
	    	newMessage: ""
		}
	},
	computed: {
		...mapState({
			messages: (state) => {
				return state.auth.messages
			},
		}),
	},

	methods: {
		...mapActions({
			logoutUser: "auth/logoutUser",
			sendMessages: "auth/sendMessage",
			getMessage: "auth/getMessage"
			

		}),
		onidle() {
			alert('You have been logged out due to inactivity of 15 minutes')
			this.$router.push({ name: "login" });
			this.logoutUser();
		},
		async sendMessage() {
			await this.sendMessages(this.newMessage)
			await this.getMessage()
    //   if (this.newMessage.trim() !== "") {
    //     this.messages.push({
    //       id: Date.now(),
    //       sender: "You",
    //       content: this.newMessage.trim()
    //     });
    //     this.newMessage = "";		
    //   }
    }

		


	},
	async mounted() {
		await this.getMessage()
	},



}

</script>
<style lang="scss">
.container1 {
	padding: 55px 30px;
	gap: 8px;

	width: 40%;
	height: 60%;
	// height: 1122px;
	// left: 54px;
	// top: 168.02px;
	margin-top: 35px;
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;

	background: #FFFFFF;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
}

.container2 {
	padding: 55px 30px;
	gap: 8px;

	width: 40%;
	height: 60%;
	// height: 1122px;
	// left: 54px;
	// top: 168.02px;
	margin-top: 35px;
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;

	background: #FFFFFF;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
}

.container3 {
	padding: 55px 30px;
	gap: 8px;

	width: 40%;
	height: 60%;
	// height: 1122px;
	// left: 54px;
	// top: 168.02px;
	margin-top: 35px;
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;

	background: #FFFFFF;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
}
.chat-container {
  width: 400px;
  margin: auto;
}

.chat-messages {
  max-height: 300px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
}

.chat-message {
  margin-bottom: 10px;
}

.message-sender {
  font-weight: bold;
}

.chat-input {
  margin-top: 10px;
}

.chat-input input {
  width: 300px;
  padding: 5px;
}

.chat-input button {
  padding: 5px 10px;
}

.container4 {
	padding: 55px 30px;
	gap: 8px;

	width: 40%;
	height: 60%;
	// height: 1122px;
	// left: 54px;
	// top: 168.02px;
	margin-top: 35px;
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;

	background: #FFFFFF;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
}

.container5 {
	padding: 55px 30px;
	gap: 8px;

	width: 40%;
	height: 60%;
	// height: 1122px;
	// left: 54px;
	// top: 168.02px;
	margin-top: 35px;
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;

	background: #FFFFFF;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
}

.container6 {
	padding: 55px 30px;
	gap: 8px;

	width: 40%;
	height: 60%;
	// height: 1122px;
	// left: 54px;
	// top: 168.02px;
	margin-top: 35px;
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;

	background: #FFFFFF;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);
	border-radius: 10px;
}


.mainTitle {
	width: 262px;
	height: 38px;

	font-family: 'Mulish';
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	line-height: 38px;
	/* identical to box height */
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.2px;

	color: #ab7ef8;

}

@media (max-width: 1000px) {
	.adminCards div {
		width: 100%;
	}

}
</style>
	