import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	text 		: string;
	ok_list 	: Array<string> = [];
	fail_list 	: Array<string> = [];
	regex 		: any = /[\W_]/g;

	check_palindrome(text: string) {

		try{ 
			//if user enter some text and it's not an empty string then do the checking
			if(text && text !== '') {

				this.text = null;

				//remove unwanted letter and lowercase all the letter
				let word = text.replace(/\W/g, '').toLowerCase();

				//reverse the word
				let reverse_word = word.split('').reverse().join('');

				//if the word and the reverse word match then the text is palidrome
				if(word === reverse_word) {

					//push the correct word to the list
					this.ok_list.push(text);

					//rearrange the list alphabetically
					this.ok_list.sort();

					return true;
				}

				//else it is not
				//push the incorrect word to the list
				this.fail_list.push(reverse_word);

				//rearrange the list alphabetically
				this.fail_list.sort();

				return false;
			}

			//else warn the user to enter some text
			alert('Please type something!')
			throw new Error('Invalid text!');
		}
		catch (error) {
			console.log(error)
		}
	}
}
