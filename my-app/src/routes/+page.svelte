<script lang="ts">
	import { onMount } from 'svelte';

	// import { Configuration, OpenAIApi } from 'openai';

	// export let data;
	export let response: string;
	// const genchat = async (input: string) => {
	// 	console.log(input);
	// 	// const res = await config.createCompletion({
	// 	// 	model: 'gpt-3.5-turbo',
	// 	// 	messages: [{ role: 'user', content: input }]
	// 	// });
	// 	// console.log(res);
	// 	// SEND RESPONSE
	// 	// return res.data.choices[0].text;
	// };

	// let mymessage = '';
	// let allChat: any[] = [];

	// const btnsend = async () => {
	// 	console.log('you hit btnsend');
	// 	allChat = [...allChat, { type: 'user', content: mymessage }];
	// 	console.log(allChat);
	// 	mymessage = '';
	// 	const printresponse = await genchat(allChat.map((m) => m.text).join('/n'));
	// 	// allchat = [...allchat, { type: 'bot', text: printresponse }];
	// };
	onMount(() => {
		// console.log(data);
		console.log(response);
	});
</script>

<div>hello world</div>
<!--
<div>
	{#each allChat as res_msg}
		<div class="message {res_msg.type}">
			<span class="whosend">
				{res_msg.type == 'user' ? 'You' : 'chatBot'}
			</span>
			{res_msg.text}
		</div>
	{/each}
</div>


<div style="display: flex;flex-direction: row;justify-content: center;">
	<input
		placeholder="Type Message You Here ....."
		class="inputtext"
		type="text"
		bind:value={mymessage}
	/>

	<button class="btnyousend" on:click={btnsend}>send</button>
</div> -->

<!-- STYLING -->
<!-- <style>
	.message {
		color: white;
		padding: 20px;
		font-size: 20px;
		opacity: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	/*  IF SEND IS USER*/
	.message.user {
		text-align: right;
		background-color: white;
		color: black;
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
		opacity: 1;
		transition: all 2s ease;
	}

	/*  IF SEND IS CHATBOT*/
	.message.bot {
		text-align: left;
		background-color: green;
		color: white;
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
		opacity: 1;
		transition: all 2s ease;
	}

	/*STYLE FOR INPUT*/
	.inputtext {
		color: black;
		height: 80px;
		width: 80%;
		font-size: 22px;
		text-align: center;
	}

	/*STYLE FOR BUTTON*/
	.btnyousend {
		background-color: yellow;
		color: black;
	}

	/*STYLE FOR WHOSEND*/
	.whosend {
		color: white;
		font-size: 12px;
		background-color: blue;
		padding: 10px;
		font-weight: bold;
	}
</style> -->
