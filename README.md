# Fuzzball
Fuzzball is named after famous american theoretical physicist Richard Feynman's pet cat. Fuzzball is capable of answering all you school standard questions in Physics. To run this web app you can follow either of the two paths mentioned below:

## Path 1 (shorter path)
You can visit our live deployment and check out how you can get your questions answered by clicking the following link. <br>
[fuzzball-cat.netlify.app](https://fuzzball-cat.netlify.app/)

## Path 2 (longer path)

### Phase One
There are few steps you need to do in order to make this web app run successfully
- Visit the site [https://platform.openai.com/](https://platform.openai.com/) and create an account.
- Once you have created the account sign in with that account click on the personal button and from the drop down select **Manage account**
![Untitled](https://user-images.githubusercontent.com/70687014/227867832-3908bf59-5495-4d7d-9022-12b6919aa3e6.png)
- Next select **API Keys** from the left navigation side bar and click on **Create new secret key**
![Untitled](https://user-images.githubusercontent.com/70687014/227868510-47d972af-93f0-4704-ac99-87f683bf2233.png)
- On clicking It will create and show you the new API Key. **Make sure to copy it because you won't see it again**.
![Untitled](https://user-images.githubusercontent.com/70687014/227869008-952cdee3-f59c-4883-8bd4-3811191c00a4.png)


### Phase Two
- Create a codespace on this repository or clone the repository in your local computer
- Open the terminal and run the command
```
npm i
```
- Next go to this file `src/components/Body/Body.jsx`
- Paste the API Key you created inside the quotes for the variable **api_key** on **line number 11**
- Finally use the following command to run the app
```
npm start
```
