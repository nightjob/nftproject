import { writable } from "svelte/store";

const account = writable<string>();

export default account;
