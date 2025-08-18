export const webDevItems = [  
    {
        id: "1",
        name: "NUDGE Mobile App",
        github: "https://github.com/NightLocke15/Nudge-Mobile-App",
        link: "",
        img: "../images/webDev/Nudge.png",
        status: "In Progress", 
        documentation: `
        <p class="paragraph">Please Note: This Project is only about halfway finished. The documents below contain planning and iteration up untill a certain point. This documentation 
        is likely to change in the near future.</p>

        <h3>Project Summary:</h3>
        <p class="paragraph">This project is made up of two items. First, a mobile application that aims to help people with Alzheimer's and Dementia and people with diagnoses such as ADHD and Dyslexia. Second, a medical provider dashboard that doctors can use to directly add prescriptions and tasks to their patients' profiles. </p>
        <p class="paragraph">The dashboard allows the doctor to schedule appointments for their patients, set up medications and their dosages, provide all the prescription details and provide details on exercises or activities the user needs to do. They will be able to do this with a patient’s unique application ID (generated when a user creates a profile). This dashboard is still in the planning phase, as up until now, I was aiming to complete a large portion of the mobile application first. </p>
        <p class="paragraph">The mobile application allows users to create to-do lists (normal, timed and checklists), store medication information, store information about the people in the user’s life, access a calendar to schedule events, see the day’s weather and make emergency calls. Many of these things will also be integrated, allowing the user to access different aspects from different pages. This will mainly have to do with the calendar, where the user will be able to see their timed lists, people’s birthdays and events. The application will also send the user notifications when these events and lists need to be tended to. </p>
        
        <h3>Style Guide</h3>
        <p class="paragraph">The styling might still change in the future, in case I find something doesn’t work according to the plan. But for now, this will be the styling and functions I aim for in the further development of this application. </p>
        <p class="paragraph">(Only the mobile application wireframes will be found below; wireframes for the dashboard will be made once the application is satisfyingly functional.)</p>
        <img class="documentImage" src="../images/webDev/nudge/headerText.png" style="width: 60%;" alt="IMAGES" />
        <img class="documentImage" src="../images/webDev/nudge/bodyText.png" style="width: 60%;" alt="IMAGES" />
        <p class="paragraph"><i>Font Choice: </i></p>
        <p class="paragraph">Both Trebuchet MS and Roboto are Sans-Serif typeface fonts. Sans-Serif fonts are fonts that have no extra bits added to the edges of the font (Tymoshchuk, 2021). And although, as Tymoshchuk (2021) states, most neurotypical people can’t really find a difference in readability when reading sans-serif fonts and serif fonts (like Times New Roman), for people who are neurodivergent and people who have poor eyesight, sans-serif fonts are easier to read. Considering that the idea for this application started with the aim to help people with Alzheimer’s and Dementia, and people who live with these are often elderly, it is safe to assume that these fonts would be easier to read. The use of these types of fonts for more accessible design is also mentioned by Ghorbel et al. (2017) when talking about people with Alzheimer’s who have poor eyesight, by Khan et al. (2018) for children with dyslexia and by Baxter (2025) for people who live with ADHD.</p>
        <img class="documentImage" src="../images/webDev/nudge/light.png" style="width: 40%; height: 40%;" alt="IMAGES" />
        <img class="documentImage" src="../images/webDev/nudge/dark.png" style="width: 40%; height: 40%;" alt="IMAGES" />
        <p class="paragraph"><i>Colour Schemes:</i></p> 
        <p class="paragraph">For now, I have decided to do only a light and dark colour scheme. I focused on the contrast, but also made sure that the contrast is not too heavy. I still wanted there to be enough contrast, so everything is easy to see, but with less contrast, there is less eye strain. Khan et al. (2018) and Ghorbel et al. (2017) for Dyslexia and Alzheimer’s, respectively, both mention avoiding very high contrast, stating that findings show that less contrast can make reading and using the design easier and more accessible. </p>
        <p class="paragraph"><i>Outline:</i></p> 
        <p class="paragraph">I want to add a setting to the application that adds an outline to all the buttons in the application in case the drop shadow is not enough. Thus, making the buttons easier to see.</p>
        <p class="paragraph">Along with the above-mentioned three authors, other articles I looked at that speak on designing for Alzheimer’s, Dementia, ADHD and Dyslexia all said similar things. What it comes down to: </p>
        <p class="listItem">Simplistic design with no unnecessary distractions.</p>
        <p class="listItem">No unnecessary actions to make accessing sections as easy as possible.</p>
        <p class="listItem">Small sections of information.</p>
        <p class="listItem">Logical file structure.</p>
        <p class="listItem">Short, descriptive headings.</p>
        <p class="paragraph">(Erikson, 2024; Design Whisperer, 2025; Williams, 2024)</p>
        <p class="paragraph">When designing the wireframes for the application and deciding on fonts and colour schemes, these are the things I was trying to keep in mind. The application design is intentionally extremely simple, to avoid unnecessary clutter and distractions. A big goal for this application is to help users get things done, which might be complicated if the application was overly busy.</p>

        <p class="paragraph"><i>Note on Gestures:</i></p>
        <p class="paragraph">In the initial design, there are a few gestures used, including press, press and hold, and swipe. For the newest iteration, I want to remove the swipe and add a double tap. This is to make the amount of movement as little as possible, in the case of someone having mobility problems (Ghorbel et al., 2017). The tap motion is more minimal than swiping. Thus, I want to implement these three gestures everywhere that it is needed to keep the consistency intact and avoid long sweeping motions that might be harder to achieve. Each use case will be explained below.</p>

        <h3>Screenshots and Wireframes</h3>
        <p class="paragraph">Note: The picture on the left is what the app page currently looks like. The two on the right are the wireframes for future plans (unless otherwise states).</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/startPageCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/startPageNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/startPageNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Splash Screen:</i></p>
        <p class="paragraph">This is the page that the user will see when they open the application. As shown above, the fonts will be changed to be more legible than the initial design. This page will take the user to a page where they will either log in or create a new account. If the user has already been logged in, the page will immediately go to the Home Page.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/preHomeCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/preHomeNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/preHomeNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Pre-Home Page: </i></p>
        <p class="paragraph">From this page, the user will either log in or create a new account.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/loginCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/loginNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/loginNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Log In Page:  </i></p>
        <p class="paragraph">Here, the user will log in with their email address and their password. They are also able to access the “Create a New Account” page through the blue link at the bottom of the page, should they need to.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/createCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/createNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/createNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Create an Account Page: </i></p>
        <p class="paragraph">Here, the user will be able to create a new account by entering their name, email address and a password that consists of 8 characters, 1 number and 1 special character. The user will also be able to access the login page through the blue link at the bottom of the page, should they need to.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/homeCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/homeNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/homeNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Home Page:  </i></p>
        <p class="paragraph">The initial design was purely to show the buttons. The newest iteration will have icons along with the labels to make it as easy as possible to access the section you need. The user will be able to access any section of the application from the home page. These include the settings (Top right) and each of the elements made accessible by the application, like the diary logs, to-do lists, etc.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/listsCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/listsNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/listsNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>To-Do Lists: </i></p>
        <p class="paragraph">Here, all the user’s lists will be stored. When a list is created, the user can press and hold the list item to change its type from normal to timed to checklist and back. Clicking on the list itself will take the user to the list where they can then directly interact with its content.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/createListsCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/createListsNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/createListsNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Adding To-Do Lists: </i></p>
        <p class="paragraph">When clicking on the plus icon in the top right, a box will then appear that allows the user to name their list. Once they press “Done”, the list will then be added to the user’s information and the list on this page. This functionality is the same for all the lists, and the same functionality is used when the user edits an item.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/normalListsCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/normalListsNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/normalListsNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Normal List: </i></p>
        <p class="paragraph">When accessing a normal list, this is what the user will be presented with. In the first iteration, the user would need to swipe the item to the right to access the delete button and swipe it to the right to access the edit button. I plan on changing this, as shown in the wireframes below. Furthermore, when completing an item, the user needs to press and hold the item for it to be struck through and register as completed in the user’s information.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/listActionsNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/listActionsNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph">(No current iteration, only wireframes)</p>
        <p class="paragraph"><i>Double-tap for Extra Options:  </i></p>
        <p class="paragraph">Moving forward, the user will double-tap the item to be provided with extra options like delete and edit. This is to keep movement minimal. This will be implemented anywhere where there are list- or log items that the user can interact with, to keep it consistent throughout the application.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/timedListsCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/timedListsNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/timedListsNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Timed List:  </i></p>
        <p class="paragraph">This list is a little more complicated. The user can add a start and end time at the top to determine a timespan they will be working in. They can then add list items (in the same manner as you do in the normal list). After changing the amount of time they want to spend on each item by clicking on the minutes in the middle of the list item, they can update the list, where the list will then calculate when the task should be started and completed. This can be updated when items are deleted and added. I plan on possibly adding an “auto” functionality that divides the time spent on each item based on its priority. If an item is overdue, the list item turns red. If a list item is outside of the timespan, the item turns orange.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/checkListsNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/checkListsNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph">(No current iteration, only wireframes)</p>
        <p class="paragraph"><i>Checklist:</i></p>
        <p class="paragraph">A possible new addition. The functionality will be the same as the normal list; however, the aim is a bit different. This is more useful for things like grocery lists. The biggest difference is the check marks on the side.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/diaryLogsCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/diaryLogsNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/diaryLogsNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Diary logs: </i></p>
        <p class="paragraph">These store information much like a note application. These tiles show the entry name, which can be edited, the date it was created and a preview of the note contained within.</p>
                <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/diaryEntryCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/diaryEntryNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/diaryEntryNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Diary Log Content: </i></p>
        <p class="paragraph">The diary logs currently only hold text, but I plan on adding functionality to add images and voice recordings as well, for people who find typing hard. This will make it accessible to a wider range of people. </p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/peopleLogsCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/peopleLogsNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/peopleLogsNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>People Logs: </i></p>
        <p class="paragraph">Here, the people in the user’s life can be stored. These will store each person’s information. On this page, their name and relationship to the user will be showcased. When clicked on, the user can access and edit more information. </p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/addPeopleCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/addPeopleNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/addPeopleNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Adding People:  </i></p>
        <p class="paragraph">Initially, adding a person will only require their name and their relationship to the user. The user will be able to edit the content when accessing it separately. </p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/personLogCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/personLogNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/personLogNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Person Log: </i></p>
        <p class="paragraph">Here, the user will be able to access and edit the information of the person recorded. It showcases their birthday, number, likes, dislikes, notes, name and relationship. The user will also be able to add a picture of the person.  </p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/medicineCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/medicineNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/medicineNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Medication Logs:</i></p>
        <p class="paragraph">Here, the user’s medication will be stored. These tiles will showcase an image of the medicine, its name, dosage, when the medicine should next be fetched (the button to indicate that it was fetched will only appear on the relevant date), and when the next dose is due. The completion buttons can be clicked to indicate that the dosage was taken. This is reset on the next day that a dose needs to be taken. </p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/addMedicineCur.png" style="width: 34%; height: 34%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/addMedicineNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/addMedicineNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph"><i>Adding Medication: </i></p>
        <p class="paragraph">Here, all the relevant information is added so all the relevant calculations can be made. The user adds the name, dosage, how many times the medication needs to be repeated, when the medicine was first fetched, how often it needs to be fetched, when the first dose was taken, how often the medicine needs to be taken and every time a dose needs to be taken. This does look complicated; however, this is more meant for the caretakers to add all the logs. </p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/calendarNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/calendarNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph">(No current iteration, only wireframes)</p>
        <p class="paragraph"><i>Calendar:</i></p>
        <p class="paragraph">The calendar will hold all the events that the user must attend, including appointments. These will hold other information like the time, place and duration. The calendar will also display the weather of the selected day, along with recommended clothing. The calendar will have access to other things like timed lists and the people logs for birthdays. The calendar will show dots on any of the days that contain events the user needs to know about.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/addEventNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/addEventNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph">(No current iteration, only wireframes)</p>
        <p class="paragraph"><i>Adding Calendar Events:</i></p>
        <p class="paragraph">Events and appointments can be added by adding the event name, place, time and duration of the event. This will then be stored in the calendar and daily agenda.</p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/viewEventNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/viewEventNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph">(No current iteration, only wireframes)</p>
        <p class="paragraph"><i>View Event:</i></p>
        <p class="paragraph">The user can view the event and its details by clicking on it in the daily agenda. </p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/clockNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/clockNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph">(No current iteration, only wireframes)</p>
        <p class="paragraph"><i>Clock: </i></p>
        <p class="paragraph">(non-essential) I will possibly add a clock page where the user can use the timer for doing a task for a certain time, as well as set up alarms, for any reminder they might need. </p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/emergencyNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/emergencyNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph">(No current iteration, only wireframes)</p>
        <p class="paragraph"><i>Emergency:</i></p>
        <p class="paragraph">On this page, the user would need to hold in the emergency call buttons for a certain amount of time for them to call either their emergency contact or Emergency services. </p>
        <div class="row">
            <img class="documentImage" src="../images/webDev/nudge/settingsNewL.png" style="width: 30%; height: 30%;" alt="IMAGES" />
            <img class="documentImage" src="../images/webDev/nudge/settingsNewD.png" style="width: 30%; height: 30%;" alt="IMAGES" />
        </div>
        <p class="paragraph">(No current iteration, only wireframes)</p>
        <p class="paragraph"><i>Settings:</i></p>
        <p class="paragraph">Here, the user will be able to change the application visually as well as edit the details of their account. </p>
        <p class="paragraph"><i>Other Notes:</i></p>
        <p class="paragraph">I am looking to implement a function where a caregiver can prevent the user from editing certain elements, like medicine, to prevent them from accidentally changing important information.</p>
        
        <h3>Goals</h3>
        <p class="paragraph">I divided my goals for this project into two sections: personal and project goals. Over the last few months, working on this project, I found that some of these goals needed more specifics. Below, I will be specifying each goal further and discussing how I have or haven’t worked towards these goals.</p>

<p class="paragraph"><i>Personal:</i></p>
<p class="paragraph"><i>1.	Implementing Good UI/UX Practices:</i></p>
<p class="paragraph"><u>Define:</u> To give it a more specific Definition, this goal entails having industry-standard UI/UX that follows the recommended guidelines. UI/UX that is accessible, inclusive, responsive, easily understandable and implemented in a way that makes sense in code.</p>
<p class="paragraph"><u>Have I worked towards this:</u> The UI/UX currently implemented is not final. And although I did do my best to implement the UI/UX in this way, I think there is a lot of room for improvement. Styling works a little bit differently in React Native, so I have needed to adjust. I am still learning how to implement it properly, and although I do not think I have completely been able to achieve this yet, I am confident I will be able to at least find a better way of implementing the styles than I have been thus far. </p>

<p class="paragraph"><i>2.	Implementing Good, Clean and Understandable Code:</i></p>
<p class="paragraph"><u>Define:</u> Implementing code that is easily understandable, clean, efficient and consistent. The code uses the correct syntax. On a more personal note, am I able to learn about new code on my own and implement it effectively.</p>
<p class="paragraph"><u>Have I worked towards this:</u> In a broad sense, yes. I truly attempted to create code that is not unnecessarily convoluted. I will be honest in saying that I do think there are pieces of code that can be streamlined, but as I have continued to create this application, I have learned to do this more easily. I will be going back and adjusting the code to be more streamlined. On the topic of whether I was able to learn new code? This is a definite yes. Although React Native is very similar to ReactJS, it has many nuances, and I had to go through quite a learning curve to get everything to work. I also plan on working towards using a database in the future, which is a whole other challenge.</p>

<p class="paragraph"><i>3.	Staying Feedback Driven and Human First:</i></p>
<p class="paragraph"><u>Define:</u> Using testing and feedback to make positive changes to improve the project, while making sure to properly discern between useful and non-useful feedback. Making sure the application is made for people and always keeping them in mind.</p>
<p class="paragraph"><u>Have I worked towards this:</u> Partly yes. I always have the individuals who might use this application in mind when I develop. However, I could not do testing on the application yet. That is the next step after I have finished the last of the frontend for the mobile application.</p>

<p class="paragraph"><i>Project:</i></p>
<p class="paragraph"><i>1.	Intuitive UI/UX:</i></p>
<p class="paragraph"><u>Define:</u> UI/UX that is easy to understand and easy for new users to get used to. UI/UX that is easy to interact with, with no unnecessary actions or interactions. UI/UX that is consistent throughout the application.</p>
<p class="paragraph"><u>Have I worked towards this:</u> I have done my best; however, I did realise that the swiping action might not be a right fit for the application, so I plan on changing it to a double tap that provides more options. Furthermore, I have done my best to stay consistent with the UI/UX; however, I did use this first iteration to test different methods of interacting with the UI/UX to see which would work the best.</p>

<p class="paragraph"><i>2.	Accessibility:</i></p>
<p class="paragraph"><u>Define:</u> An application that is accessible to anyone who wishes to use it, and that allows the user to personalise their experience to what best suits them.</p>
<p class="paragraph"><u>Have I worked towards this:</u> I have made decisions on how I will be implementing personalisation through the wireframes shown above, although this still needs to be implemented. When it comes to whether it is accessible to anyone who wishes to use it, I would say yes. I am trying to make the application easy to understand and easy to use so that anyone of any ability can use it.</p> 

<p class="paragraph"><i>3.	Smooth Integration:</i></p>
<p class="paragraph"><u>Have I worked towards this:</u> I have not reached this part of the project yet, so I do not have any comment on its definition yet. </p>

<p class="paragraph"><i>4.	Scalability:</i></p>
<p class="paragraph"><u>Define:</u> A scalable application that contains code that can be used to expand the application.</p>
<p class="paragraph"><u>Have I worked towards this:</u> I have, albeit unintentionally. The elements I have chosen for this application are inherently similar in the way they are set up, which helped me set up many of the pages. But this has also allowed me to think of other components that might be added; the checklist is a good example of this. The application is inherently something you can add to, because it is meant to be an application that people use for different reasons. There is a lot of expanding that can be done in the diary and calendar sections, for example, if you want to optimise parts of it for students. This application can be scaled to a much wider scope than I currently have it at. It is, however, important that I go back and make sure that the code allows for this. There are admittedly a few areas in the code that can be done in a better way.</p>

<h3>References:</h3>
<p class="paragraph">Baxter, Y.A. (2025) ‘Designing for Neurodiversity: Creating ADHD-Friendly Digital Publications’. Available at: <a class="refLink" href="https://digitalcommons.liberty.edu/masters/1297/">https://digitalcommons.liberty.edu/masters/1297/</a> (Accessed: 28 July 2025).</p>
<p class="paragraph">Ghorbel, F., Metais, E., Ellouze, N., Hamdi, F. and Gargouri, F.  (2017) “Towards Accessibility Guidelines of Interaction and User Interface Design for Alzheimer’s Disease Patients”. ACHI 2017. The Tenth International Conference on Advances in Computer-Human Interactions, Mar 2017, Nice, France. pp.143-149</p>
<p class="paragraph">Khan, R., Oon, Y.B., Inam, M., Inam Ul Haq, M. and Hajarah, S. (2018). “Proposed user interface design criteria for children with dyslexia”. International Journal of Engineering and Technology. 7. 5253-5257. 10.14419/ijet.v7i4.25496.</p>
<p class="paragraph">Tymoshchuk, O. (2021) “Font Readability Research: Key Difference Between Serif Vs Sans Serif Font”, Geniusee. 30 June. Available at: <a class="refLink" href="https://geniusee.com/single-blog/font-readability-research-famous-designers-vs-scientists">https://geniusee.com/single-blog/font-readability-research-famous-designers-vs-scientists</a> (Accessed: 28 July 2025).</p>
<p class="paragraph">Design Whisperer. (2025) ‘Neurodiverse by Design: UX Strategies for Inclusive Digital Spaces’, Dtalks, 9 January. Available at: <a class="refLink" href="https://medium.com/dtalks/neurodiverse-by-design-ux-strategies-for-inclusive-digital-spaces-f06aef12c95c">https://medium.com/dtalks/neurodiverse-by-design-ux-strategies-for-inclusive-digital-spaces-f06aef12c95c</a> (Accessed: 28 July 2025).</p>
<p class="paragraph">Williams, R. (2024) “Why is digital design important for someone affected by dementia?” Alzheimer’s Society. 20  March. Available at: <a class="refLink" href="https://www.alzheimers.org.uk/blog/how-design-website-someone-affected-dementia">https://www.alzheimers.org.uk/blog/how-design-website-someone-affected-dementia</a> (Accessed: 28 July 2025).</p>
<p class="paragraph">Erikson, M. (2024) “Embracing Neurodiversity in UX Design: Crafting Inclusive Digital Environments”. UXmatters. 22 April. Available at: <a class="refLink" href="https://www.alzheimers.org.uk/blog/how-design-website-someone-affected-dementia">https://www.alzheimers.org.uk/blog/how-design-website-someone-affected-dementia</a> (Accessed: 28 July 2025).</p>
`
    },
    {
        id: "2",
        name: "The Character Collection",
        github: "https://github.com/NightLocke15/DIGA4015A_2615283_ChristineHolt_ExamWebApp",
        link: "",
        img: "../images/webDev/CharacterCollection.png",
        status: "Being Revamped",
        documentation: `
        <h3>App Theme:</h3>
<p class="paragraph">This is a Dungeons and Dragons (2014) Character creator app. Users/players can create
and store all their characters in one place and access the rules of the game at any time.</p>
<p class="paragraph"><i>Character Creator:</i></p>
<p class="paragraph">The character creator will provide 2 ways to create a character: guided or unguided.
Guided creation is for new players who need help in creating their characters. The
app will provide relevant information as the player moves through the creation
process. Unguided is for players who have played before. The creation process will
not provide information unless it is requested, thus, the information will still always
be accessible.</p>
<p class="paragraph"><i>Character List:</i></p>
<p class="paragraph">The app will provide a page where the user’s characters are all stored. When
accessing one of the characters, the player will be taken to a character sheet
viewer/editor, where the users can view or edit their character sheet.</p>
<p class="paragraph"><i>Rules:</i></p>
<p class="paragraph">The rules of the game will be accessible to anyone using the app. This will be
possible in two ways: by going to the rules tab or by accessing the rules directly in
the character sheet viewer/editor. The players will either be able to manually
traverse through the rules under the rules tab or use the search function to access a
certain section of the rules. They will also be able to access it when viewing their
character sheet by using the rule search function that will bring up certain sections
of the rules or by clicking the more information button on any section of their
character sheet.</p>
<h3>User Research:</h3>
<p class="paragraph"><i>Personas:</i></p>
<p class="paragraph"><u>New Dungeons and Dragons (2014) Player:</u></p>
<p class="listItem">Demographics:</p>
<p class="listItem sub">Age range: 12+</p>
<p class="listItem sub">Gender: Any</p>
<p class="listItem sub">Device Accessibility: Mobile/Computer</p>
<p class="listItem">Goals:</p>
<p class="listItem sub">Learning how to create a character in Dungeons and Dragons (2014).</p>
<p class="listItem sub">Learning how to play Dungeons and Dragons (2014).</p>
<p class="listItem sub">Learning how to use each of the elements on the character sheet in the Dungeons
and Dragons (2014) game.</p>
<p class="listItem">Frustrations:</p>
<p class="listItem sub">The rules of the game are quite hard to keep track of, especially the rules about
elements found on the character sheet.</p>
<p class="listItem sub">The paper character sheet has many pages, and it is hard to make changes and
keep track of the location of certain notes or possessions.</p>
<p class="listItem sub">Some of the roles pertain to quite a few calculations, and it is necessary to keep
track of what to add or subtract.</p>
<p class="listItem">Key Behaviours:</p>
<p class="listItem sub">Using the app to look up rules about certain behaviours and choices.</p>
<p class="listItem sub">Use the app to create a character through a guided process.</p>
<p class="listItem sub">Use the app to keep track of their created characters.</p>
<p class="listItem sub">Using the app to keep track of their character, level, XP, spells, items, personality,
friends, enemies, statistics, etc.</p>
<p class="listItem sub">Use the app to make rolls (saving throws, checks, etc).</p>
<p class="paragraph"><u>Experienced Dungeons and Dragons (2014) Player:</u></p>
<p class="listItem">Demographics:</p>
<p class="listItem sub">Age range: 12+</p>
<p class="listItem sub">Gender: Any</p>
<p class="listItem sub">Device Accessibility: Mobile/Computer</p>
<p class="listItem">Goals:</p>
<p class="listItem sub">Creating characters for the Dungeons and Dragons (2014) campaigns they will be
playing in.</p>
<p class="listItem sub">Storing all their characters in one place.</p>
<p class="listItem sub">Getting a refresher on how to play the game and/or how to create a character.</p>
<p class="listItem sub">Have access to the rules of the game to get a refresher whenever needed.</p>
<p class="listItem">Frustrations:</p>
<p class="listItem sub">The paper character sheet easily becomes dirty when erasing and rewriting
statistics, items and/or notes.</p>
<p class="listItem sub">Keeping all characters in one place can become hard when characters pile up.</p>
<p class="listItem sub">Having to constantly look up rules for a refresher either online or in books can
become frustrating.</p>
<p class="listItem sub">Having to do all the calculations manually can become tedious.</p>
<p class="listItem">Key Behaviours:</p>
<p class="listItem sub">Use the app to keep track of all their characters.</p>
<p class="listItem sub">Use the app to create new characters.</p>
<p class="listItem sub">Using the app in gameplay when having to roll dice or keep track of items and
other elements.</p>
<p class="listItem sub">Using the app to refresh their knowledge on gameplay whenever needed.</p>
<h3>User Stories:</h3>
<p class="paragraph"><u>New Player creating character:</u></p>
<p class="paragraph">As a new Dungeons and Dragons player, I would like to create a character for a
campaign in an easily understandable way through a guided process.</p>
<p class="listItem">Create a character with short sections of information provided alongside each step
of the creation process.</p>
<p class="listItem">These rules and information should also be accessible when viewing and/or editing
the character sheet.</p>
<p class="paragraph"><u>New Player learning to play the game:</u></p>
<p class="paragraph">As a new Dungeons and Dragons player, I would like to learn about the rules of the game
while I create a character or while I am playing.</p>
<p class="listItem">The rules should be easily accessible and traversable through a search function.</p>
<p class="listItem">These rules should be accessible either by going to the rules section of the app or by
searching for them directly in the character sheet viewer/editor.</p>
<p class="paragraph"><u>Experienced player creating a character:</u></p>
<p class="paragraph">As an experienced Dungeons and Dragons (2014) player, I would like to create a
character for a campaign quickly and efficiently.</p>
<p class="listItem">The character creator should have an option to be filled in unguided.</p>
<p class="listItem">The guidance should, however, be accessible at any time whenever the user needs
to be reminded of a certain piece of information.</p>
<p class="paragraph"><u>Experienced player refreshment on rules:</u></p>
<p class="paragraph">As an experienced Dungeons and Dragons (2014) player, I would like to have easy
access to the rules of the game when I need to be reminded how something works.</p>
<p class="listItem">Experienced players often also need refreshers on the rules of the game.</p>
<p class="listItem">These players should also be able to access the rules about their character sheet or
other sections of the game easily by accessing them in the rules section of the app
or directly from the character sheet viewer/editor.</p>
<h3>Information Architecture:</h3>
<p class="paragraph"><i>Sitemap:</i></p>
<p class="paragraph">The Sitemap for each of the pages and the information contained within them:</p>
<img class="documentImage" src="../images/webDev/characterCreator/sitemap.png" alt="IMAGES" />
<p class="paragraph"><i>User Flow:</i></p>
<p class="paragraph">Flow that the user could follow when using the web application:</p>
<img class="documentImage" src="../images/webDev/characterCreator/userflowP1.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/userflowP2.png" alt="IMAGES" />
<h3>Wireframes:</h3>
<p class="paragraph">Wireframes of all the pages in the application on desktop.</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/homeBeforeLogD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/homeBeforeLogL.png" alt="IMAGES" />
<figcaption>Figure 1 A representation of the "Home" page before the user has logged in</figcaption>
</figure>
<p class="paragraph"><i>1. Website Logo:</i></p>
<p class="paragraph">This is the logo for the website. It will be visible on all the pages in the header. When
clicked on, it will take the user back to the home page (after logging in, to the
homepage that contains links to the rest of the site).</p>
<p class="paragraph"><i>2. Home Page Before Log In:</i></p>
<p class="paragraph">This is the page the user will see before logging into the app. It contains the splash
screen with a welcome message, a button that will take the user to the log-in page,
and a link that will take the user to the create a new account page if they do not have
an account already.</p>
<p class="paragraph"><i>3. Profile Picture and Log In Link Before Log In:</i></p>
<p class="paragraph">The profile picture will be blank before the user logs in, and next to it there will be a
link that takes the user to the log-in page. This will change after the user has logged
in.</p>
<p class="paragraph"><i>4. Log In Button:</i></p>
<p class="paragraph">The log-in button will be red to pull the user’s attention with the words “Log In”
clearly in white to indicate the purpose of the button. This button will take the user to
the login page.</p>
<p class="paragraph"><i>5. Create New Account Link:</i></p>
<p class="paragraph">In the case that the user does not have an existing account, this link will take them
to the “Create a New Account” page, where they will be able to create a new account
and log in to use the app.</p>
<p class="paragraph"><i>6. Footer With Legal Notice:</i></p>
<p class="paragraph">The API I will be using contains content owned by Wizards of the Coast, however, it is
published under an Open Gaming License, which allows people to use the content
in a specific manner. In the case of “fan sites”, there are some legal statements that
must be found on the page, including the statement included here (This will be found
on each page; some of the below wireframes do not contain them as it is expected
users will scroll on those pages) (Wizards of the Coast, 2017). There will be further
information on this on the “About” page.</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/loginD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/loginL.png" alt="IMAGES" />
<figcaption>Figure 2: Representation of the "Log In" page.</figcaption>
</figure>  
<p class="paragraph"><i>7. Email Address Log In:</i></p>
<p class="paragraph">On the log-in page, the user will be required to enter the correct email address in the
input field.</p>
<p class="paragraph"><i>8. Password Log In:</i></p>
<p class="paragraph">The user will also need to enter the correct password in the input field. This and the
above email address input field (if entered correctly) will allow the user to enter and
use the application.</p>
<p class="paragraph"><i>9. Forgot Password Link:</i></p>
<p class="paragraph">In the case that the user has forgotten their password, this link will take them to a
page that will allow them to change their password (it will look almost identical to
the “Create a New Account” page below). The link is coloured blue, following the
convention for hyperlinks (Melchor, 2025), and catches the eye because it is
different from the rest of the colour palette.</p>
<p class="paragraph"><i>10. Log In Button:</i></p>
<p class="paragraph">This button is visually consistent with the log-in button on the “Home” page. After
filling in the relevant information, this will log the user in and allow them access to
the rest of the app.</p>
<p class="paragraph"><i>11. Create a New Account Link:</i></p>
<p class="paragraph">This link takes the user to the create a new account page in the case that they
clicked the log-in button on the home page and they do not already have an account.</p>  
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/creatAccD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/createAccL.png" alt="IMAGES" />
<figcaption>Figure 3: Representation of the "Create a New Account" page.</figcaption>
</figure> 
<p class="paragraph"><i>12. Enter a Username:</i></p>
<p class="paragraph">In this input field, the user can enter any username that they would like to use. It will
be checked against the already used usernames, and if it is not in use, the user will
be allowed to take it. If it is in use, the app will let the user know by shaking the input
box and showing a piece of text stating that the username has been taken. The user
will have to choose a new username to be able to create an account.</p>
<p class="paragraph"><i>13. Enter an Email Address:</i></p>
<p class="paragraph">In this input field, the user will have to enter a valid email address to be able to
create a new account. If it is not valid, the app will let the user know similarly to how
an invalid username is shown.</p>
<p class="paragraph"><i>14. Enter a Password:</i></p>
<p class="paragraph">In this input field, the user will have to choose a password. The password will have to
satisfy all the requirements given on the page before the user will be able to create
the account.</p>
<p class="paragraph"><i>15. Confirm Password:</i></p>
<p class="paragraph">As a final confirmation of the password, to ensure that the password is typed in
correctly, there is the “Confirm Password” input. After this is typed in correctly, the
user would be able to create a new account.</p>
<p class="paragraph"><i>16. Create a New Account Button:</i></p>
<p class="paragraph">This button will create a new account for the user if all the input fields are filled out
with the correct information. It is visually consistent with the log-in button found on
the “Log In” page and the Home Page before log-in.</p>
<p class="paragraph"><i>17. Log In Link:</i></p>
<p class="paragraph">In the case that the user accessed the “Create a New Account” page when they
already have a profile, they can use this link to access the “Log In” page.</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/homeD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/homeL.png" alt="IMAGES" />
<figcaption>Figure 4: Representation of the "Home" page after the user has logged in.</figcaption>
</figure>  
<p class="paragraph"><i>18. Navigation Bar:</i></p>
<p class="paragraph">The navigation bar will give the logged in user access to all the pages the app has to
offer. When on a certain page, the button in the navigation bar will be surrounded by
a red border, to help the user know where they currently are on the app.</p>
<p class="paragraph"><i>19. Profile Picture and Username Link after Log In:</i></p>
<p class="paragraph">The profile picture will show the user’s chosen profile picture (if they have one) along
with their username (which will also be used in the welcome message on the Home
Page). These will be clickable and will bring up a settings drop-down menu (as
shown in the “About” page wireframe below).</p>
<p class="paragraph"><i>20. Navigation Tabs:</i></p>
<p class="paragraph">On the “Home” page (after logging in), three tabs will be present that take the user to
the most important pages: their list of characters, the character creator and the
rules page. These are the main functions of the app, so they would be the most
important. The other pages are accessible through the Navigation bar at the top of
the page.</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/createD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/createL.png" alt="IMAGES" />
<figcaption>Figure 5: Representation of the guided character creation process. Each step will look similar, with varying amounts of
choices or input fields.</figcaption>
</figure> 
<p class="paragraph"><i>21. Users Pick from the Options:</i></p>
<p class="paragraph">In this wireframe is an example of the four skill proficiencies that the user would
have to choose for a Rogue build. The Whole creation process will look similar, some
with input fields, other with choices. For this example, the users will interact with
each drop-down menu to choose a skill.</p>
<p class="paragraph"><i>22. Guided Character Creation:</i></p>
<p class="paragraph">In the guided character creation process, the user will have short snippets of rules
that explain each element to them. This can be toggled on and off throughout the
character creation process. Each section of the character creation process will have
a similar looking block with a rule snippet.</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/characterListD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/characterListL.png" alt="IMAGES" />
<figcaption>Figure 6: Representation of the users list of characters</figcaption>
</figure> 
<p class="paragraph"><i>23. Character List:</i></p>
<p class="paragraph">This page will contain each of the user’s characters that they have created up until
this point. They will be able to interact with one of the tiles and access the character
sheet to view or edit it</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/characterD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/characterL.png" alt="IMAGES" />
<figcaption>Figure 7: Representation of the character sheet the user can edit or view</figcaption>
</figure> 
<p class="paragraph"><i>24. The Character Sheet:</i></p>
<p class="paragraph">This sheet contains all the information the user would need to play the game, from
basic information like their character name to the spells that they can use in the
case that they are a magic-using character. Each of these sections contains a
different set of information. It also contains an edit button, which will allow the user to edit specific
elements by opening them up in the character creator section.</p>
<p class="paragraph"><i>25. Move and Info Buttons:</i></p>
<p class="paragraph">These two buttons can be found on each of the sections in the character sheet. The
move button (the three lines) will enable the user to move the section around on a
grid so they can arrange the sheet in a manner that they see fit. The information
button (the “I” with a circle around it) will pop out a block that provides information
on that section of the character sheet (this block will look like the block found on the
character creator wireframe; however, it will pop out to the side). This gives the user
access to the rules and more information at any time.</p>
<p class="paragraph"><i>26. Combined Information Part 1:</i></p>
<p class="paragraph">This small section with right and left arrows will contain sections where the user can
type in information on their character’s personality, ideals, bonds, and flaws. Each
of these will look the same as the one shown, just with a different heading.</p>
<p class="paragraph"><i>27. Combined Information Part 2:</i></p>
<p class="paragraph">This section will contain all the information that the player would not always need
immediate access to. The spellcasting section will look as it is shown above;
however, the features and traits and character sections will mostly be text that is
entered by the player. These will look like the above-mentioned “Combined
Information Part 1”.</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/rulesD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/rulesL.png" alt="IMAGES" />
<figcaption>Figure 8: Representation of the "Rules" page before a certain section of the rules has been accessed.</figcaption>
</figure> 
<p class="paragraph"><i>28. Rule Search Bar:</i></p>
<p class="paragraph">This search bar enables the user to search for a specific rule that can be found in the
rules section. When searching a rule, the page will change to what is represented in
the below wireframe, showcasing that rule.</p>
<p class="paragraph"><i>29. Rule Category Selection:</i></p>
<p class="paragraph">The main categories in the rule section are also made available. When clicked the
page will change to what is represented in the below wireframe and will show the
rule section that was chosen</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/showRuleD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/showRuleL.png" alt="IMAGES" />
<figcaption>Figure 9: Representation of the "Rules" page when a certain section of the rules has been accessed.</figcaption>
</figure> 
<p class="paragraph"><i>30. Rule Search Bar:</i></p>
<p class="paragraph">The search bar is also accessible when a certain set of rules has been accessed. It
has the same function as the above search bar, so search for a specific set of rules.</p>
<p class="paragraph"><i>31. Rule Category Selection:</i></p>
<p class="paragraph">The rule categories are also accessible when viewing a certain set of rules. There are
a few subsections for the character section, as it is quite a large section. Clicking on
one of these sections will access that section.</p>
<p class="paragraph"><i>32. Rule Showcase:</i></p>
<p class="paragraph">On the right side of the page, the rule section chosen will be showcased, making it
accessible to the users.</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/aboutD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/aboutL.png" alt="IMAGES" />
<figcaption>Figure 10: Representation of the "About" page</figcaption>
</figure> 
<p class="paragraph"><i>33. About Section:</i></p>
<p class="paragraph">This section of the app will show three things: A section telling the user about the
creator of the app, a section where the user can contact the creator to report bugs,
problems or suggestions, and a section that shows legal information on the usage of
the Open Game License content that the API uses and which is used to create this
application (Wizards of the Coast, 2017)</p>
<p class="paragraph"><i>34. Dropdown Settings Menu:</i></p>
<p class="paragraph">When the user clicks on the “Username” in the right top corner of the page, a small
drop-down menu will appear, letting the user change the theme of the website, the
font used, access their account settings or log out. These things have been put in a
small drop-down menu because the settings available to the user are few. These
options are given to the user to give them control over their experience of the
application.</p>
<figure>
<img class="documentImage" src="../images/webDev/characterCreator/settingsD.png" alt="IMAGES" />
<img class="documentImage" src="../images/webDev/characterCreator/settingsL.png" alt="IMAGES" />
<figcaption>Figure 11: Representation of the "Account Settings" accessed through the username in the top right corner</figcaption>
</figure> 
<p class="paragraph"><i>35. Account Settings:</i></p>
<p class="paragraph">In the account settings section, the user will be able to change their email address,
username or password. They will also be able to delete their account permanently.
This gives the user control over their account, even though the account does not
require much.</p>
<p class="paragraph"><i>Other Notes on Wireframes:</i></p>
<p class="listItem">The background is a solid colour with shapes in a different hue on top. This is for two
reasons:</p>
<p class="listItem sub">Stylistic choice: The shapes represent the shapes of the dice used in tabletop
roleplaying games.</p>
<p class="listItem sub">Pragmatic choice: The shapes are to break up the background to minimise eye
strain, especially in the light theme. The shapes are simple, as to not draw too
much attention, but they break up the background.</p>
<p class="listItem">Everything that is interactable will react in some way when the mouse hovers over
the element. For example, the scale will enlarge, or the background colour will
change.</p>
<p class="listItem">The interactable elements (especially on the character sheet) fall into two
categories:</p>
<p class="listItem sub">Interactable buttons that are often bordered in red</p>
<p class="listItem sub">Non-interactable text sections (unless when editing) that are showcased with a
line under the information.</p>
<h3>Visual Design:</h3>
<p class="paragraph"><i>Style Guide:</i></p>
<img class="documentImage" src="../images/webDev/characterCreator/styleGuide.png" alt="IMAGES" />
<p class="listItem">Typography:</p>
<p class="listItem sub">For the typography, only two fonts are used. “Koulen” is used for headings and most
buttons (especially in the character sheet section). “Sunflower” is used for
everything else. Both fonts are easy to read, as they are simple without any extra
unnecessary decorations. It is important to use fonts that are easy to read to make
the app accessible and easy to use.</p>
<p class="listItem">Colour Palette:</p>
<p class="listItem sub">I have kept the colour palette simple in both the dark and light themes. The colours
used are contrasting, making it easy to see for anyone with colour blindness. The
text needs to stand out so it is easy to read. This is why the text on the page is always
white on dark backgrounds and black on light backgrounds, making everything easy
to read and see.</p>
<p class="listItem">Interactive Elements:</p>
<p class="paragraph"><i>1. Buttons:</i></p>
The “Log In” and “Create Account” buttons are red, making them stand out
against the background. These two buttons are important when accessing the
app in the beginning, so they must attract the user’s attention.
<p class="paragraph"><i>2. Text Inputs:</i></p>
All the text inputs have placeholder text that prompts the user to fill in the
relevant information. They are made up of a text input, a red border, and a drop
shadow, making it stand out against the background.
<p class="paragraph"><i>3. Drop Down Menus:</i></p>
Although the drop-down menus look like the text inputs, they have one key
difference: a downward arrow, indicating that it is a drop-down menu the user
can access.
<p class="paragraph"><i>4. Character Sheet Elements:</i></p>
All the elements on the character sheet have a similar format. The interactable
elements (buttons) are bordered in red. These can be clicked to add to them,
subtract from them, or in some cases, “roll a dice” when this action is called
upon in the game. Some parts are purely a line that contains information that
cannot be directly changed (unless it is being edited).
<p class="paragraph"><i>5. Delete Account Buttons:</i></p>
These buttons look a little bit different because they have a very important
function. They are made up of contrasting colours to the background to show
their importance and the urgency when they are clicked.
<p class="paragraph"><i>6. Toggles:</i></p>
These are used in some sections of the character sheet to indicate proficiency in
a certain skill or statistic. They are “toggled” when the circle is filled with a light
red.
<p class="paragraph"><i>7. Move and Information Buttons:</i></p>
These are found on each section in the character sheet. They are made up of a
red border, to indicate that they are interactable, as well as two icons that spark
familiarity.
<p class="listItem">Branding and Imagery:</p>
<p class="listItem sub">There will not be many (if any) images on this app, as the main element that is used
is numbers and statistics, and the aim is to focus on this. This is why the branding is
simply the name of the app. The only other image would be the character profile
picture, should they choose to have one. The icons used are familiar, even though
there are not many. The downward arrow indicates a drop down, the three lines
indicate that it is interactable and will move the element, and the “I” in a circle
indicates that more information will be provided.</p>
<h3>Accessibility:</h3>
<p class="paragraph">To ensure that my web app is accessible to all users, I have done some reading on some
best practices when creating a web app. Mehul Mohan (2023) describes some of these
practices the best, thus, I have based my decisions on some of the things they have
mentioned:</p>
<p class="listItem">Semantic HTML</p>
<p class="listItem sub">To make my app usable by individuals who use screen readers, this is an important
step. Use descriptive tags that convey the structure of each page and the purpose of
each element on the page.</p>
<p class="listItem">Contrast</p>
<p class="listItem sub">The theme of the app must have enough contrast that anyone can use it. Viewing my
wireframes in a browser and setting the screen to each type of colour blindness
shows that no matter which type of colour blindness someone has, they will be able
to view and use my app, as the contrast between the colours used is sufficient in
both themes.</p>
<p class="listItem">ARIA labels</p>
<p class="listItem sub">Using these labels makes my site more accessible to a wider range of people, as it
can be used to make the app more accessible with the use of custom controls,
making the usage of each element clearer, etc. This is a very important addition in
making my app more accessible.</p>
<p class="listItem">Keyboard Accessibility</p>
<p class="listItem sub">This is to ensure that the app is usable by people who prefer to use their keyboards
to use web apps for a variety of reasons, including limited motor functions. It would
be important to enable users to navigate and use the web app using certain keys on
their keyboard.</p>
<h3>Responsiveness:</h3>
<p class="paragraph">It is important that users with all devices can use my app. The usage on desktop is
shown above in the wireframes. The following are some notes on responsiveness for
other screen types:</p>
<p class="listItem">Tablets</p>
<p class="listItem sub">If the tablet has a large enough screen, the layout will be very similar to the desktop
layout. However, if it is a tablet with a smaller screen, it will be closer to the layout
that will be found on a mobile screen (as discussed below).</p>
<p class="listItem">Mobile phones</p>
<p class="listItem sub">For mobile phones, there will be a few differences in layout because of the smaller
screen. Some of these differences are:</p>
<p class="listItem subOne">The navigation bar will be added to a burger menu in the top right corner of the
screen.</p>
<p class="listItem subOne">The user profile picture and username will be added to the burger menu.</p>
<p class="listItem subOne">The character sheet will not be laid out the same. Instead, the most important
information will be at the top, and the rest will be available when scrolling down.</p>
<p class="paragraph">Other than the above-mentioned changes, it is the aim to keep most of the functionality
the same as on desktop.</p>
<h3>Performance:</h3>
<p class="paragraph">The aim is to keep the performance of the app good. To achieve this, I have made some
of the following decisions:</p>
<p class="listItem">Limited image use</p>
<p class="listItem sub">There is little to no images in use in my design. This will improve performance, as
there will not be many images that need loading.</p>
<p class="listItem">Optimising images</p>
<p class="listItem sub">The images that I do use (mostly for backgrounds and profile pictures) will be added
in optimised formats to reduce loading time.</p>
<p class="listItem">Simplistic design</p>
<p class="listItem sub">The website has a relatively sleek and clean design. This means limited elements
and not much information to load, which will improve performance.</p>
<h3>References:</h3>
<p class="paragraph">Dungeons and Dragons (5th edition). (2014). [Board Game]. Wizards of the Coast.</p>
<p class="paragraph">Melchor, L.O. (2025) ‘Why Are Hyperlinks Blue? The Short Story’. The Daily Egg. 20
February. Available at: <a class="refLink" href="https://www.crazyegg.com/blog/why-hyperlinks-are-blue/">https://www.crazyegg.com/blog/why-hyperlinks-are-blue/</a>
(Accessed: 15 April 2025).</p>
<p class="paragraph">Mohan, M. (2023) ‘7 Best Practices for Building Accessible Web Applications’.
Codedamn News. 20 March. Available at: <a class="refLink" href="https://codedamn.com/news/frontend/7-best-practices-accessible-web-applications">https://codedamn.com/news/frontend/7-best-practices-accessible-web-applications</a> (Accessed: 15 April 2025).</p>
<p class="paragraph">Fan Content Policy (2017) Wizards of the Coast. Available at:
<a class="refLink" href="https://company.wizards.com/en/legal/fancontentpolicy">https://company.wizards.com/en/legal/fancontentpolicy</a> (Accessed: 15 April 2025)</p>`,
    },
    {
        id: "3",
        name: "Step 1",
        github: "https://github.com/NightLocke15/WSOA3029A_2615283_ChristineHolt_CommercialWebsite",
        link: "https://nightlocke15.github.io/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/index.html",
        img: "../images/webDev/StepOne.png",
        status: "Being Revamped",
        documentation: `
        <h3>Wireframes</h3>
            <img class="documentImage" src="../images/webDev/stepOne/Home1.png" alt="Wire frame of the home page that shows the main image and the branding as well as the downward arrow" title="Home Page wireframe">
                <img class="documentImage" src="../images/webDev/stepOne/Home2.png" alt="Wire frame of the home page that shows the recipe card that takes the user to the recipes." title="Home Page wireframe">
                <img class="documentImage" src="../images/webDev/stepOne/Home3.png" alt="Wire frame of the home page that shows the articles and post a recipe cards that takes the user to the articles and the post a recipe page" title="Home Page wireframe">
                <img class="documentImage" src="../images/webDev/stepOne/Home4.png" alt="Wire frame of the home page that shows the footer of the website" title="Home Page wireframe">
                
                <p class="paragraph">1. <u>Website Name and Logo</u>: The website name is “Step 1” in reference to the steps followed when following a recipe. It is simple, and humorous, already setting the more relaxed tone of the rest of the website. This section will also serve the same purpose as the home button in the navigation, as it will take the user back to the home page. </p>
                    <p class="paragraph">2. <u>Navigation</u>: The navigation buttons are in the same font as the logo, to give some continuity and help further the relaxed feel of the website. The font used for the logo is also quite legible, so it does not cause problems for readability. When the user is on the page that the navigation button is linked to, the button has a salmon pink background with white text to separate it from the other buttons and help the user keep track of where they are in the website. The other buttons have a dark maroon colour with a white background. When the user hovers over the button with their mouse, the background changes to the same colour as the current page button. </p>
                    <p class="paragraph">3. <u>Logo and Slogan</u>: The first thing on the website is an image of jam (something you definitely need a recipe to make) by Pixaby on the Pexels website. On top of this is the website name and logo, as well as a section with a white background that serves as the website slogan. It helps the user understand that the website is mainly about recipes, and only recipes, no extra essays on unnecessary things. </p>
                    <p class="paragraph">4. <u>Downward arrow</u>: This will serve as a guide, telling the user to scroll down in order to see the rest of the page and what the website offers. It will move up and down</p>
                    <p class="paragraph">5. <u>Recipe Section</u>: This section introduces the first and main aspect of the website, the recipes. The user can access these recipes clicking on the card, that will take them to the page that contains all the recipes available on the website.</p>
                    <p class="paragraph">6. <u>Articles Section</u>: This section offers additional aspects of the website, the articles. Clicking the card takes the user to the article page that contains the articles available on the page. </p>
                    <p class="paragraph">7. <u>Post a Recipe Section</u>: This final section lets the user know that they can use the website to post their own recipes, by sending the recipe to the creators. Clicking the card takes the user to a page where they can fill in their recipe and details in order to send it to the creators so they can add it to the recipe archives.</p>
                    <p class="paragraph">8. <u>Further Notes on above sections</u>:</p>
                    
                        <p class="listItem subOne">These sections tell the user in quick and small sections what the website can be used for. They are short and small and easy to digest, also giving easy access to each section.</p>
                        <p class="listItem subOne">These sections are separated by salmon pink borders, with dark maroon headings, buttons and separators. </p>
                        <p class="listItem subOne">These sections will fade in as the user scrolls down.</p>
                     
                    <p class="paragraph">9. <u>Background</u>: The background has light pink leaves. The watermark is to break up the bright white colour of the background to make it easier to look at for the user.</p>
                    <p class="paragraph">10. <u>Footer</u>: The footer is made up of a salmon pink background with white text representing the links to the different sections in the website. The footer is static at the bottom of the screen, as the header stays on the screen constantly, thus the footer does not need to be accessed at all times. When the user hovers over the different links the backgrounds change to a slightly lighter color to indicate that they are interactable.</p>
                
           <img class="documentImage" src="../images/webDev/stepOne/RecipeIndex.png" alt="Wire frame of the recipe index that shows the layout of the filter buttons on the left and the recipe links in the main portion of the page, each with a name, time and image" title="Recipe Index Wireframe">
                <p class="paragraph">11. <u>Search bar</u>: The search bar enables the user to search for a specific recipe they are looking for (If they can’t find one they want, they can always send a suggestion!)</p>
                    <p class="paragraph">12. <u>Filter Buttons</u>: These buttons filter the list of recipes into the different categories of recipes available on the website. When a filter button is pressed, the background will change colour and stay that colour, to constantly remind the user what category they are currently on. When the buttons are hovered over, the backgrounds will also change to the colour. </p>
                    <p class="paragraph">13. <u>Recipe</u>: All the recipes will have a salmon pink coloured border, an image of the food the recipe is for, the name of the recipe and the approximate time it will take to make. This gives the user the basic information about the recipe, and a basic idea of what they should expect. When the user hovers over a recipe, the size of the thumbnail will increase slightly, and the colour of the border will change.</p>
                
            <img class="documentImage" src="../images/webDev/stepOne/Recipe.png" alt="Wireframe of a recipe showing the title image, ingredients and instructions on the page" title="Recipe Wireframe">
                <img class="documentImage" src="../images/webDev/stepOne/recipe1.png" alt="Wireframe of a recipe showing the title image, ingredients and instructions on the page" title="Recipe Wireframe">
                <p class="paragraph">14. <u>Recipe</u>: The recipe is made up of a title, an image, a list of ingredients, instructions and notes.</p>
                    <p class="paragraph">15. <u>Toggles</u>: These toggles can be activated while the user is on this page, so help them keep track of the ingredients that they have ready, and so they can see what they still need.</p>
                
            <img class="documentImage" src="../images/webDev/stepOne/PostRecipe.png" alt="Wire frame of instructions to post and recipe on the website with a title and the instructions" title="Post a Recipe Wireframe">
                <p class="paragraph">16. <u>Post a Recipe Page</u>: This page enables the user to send a recipe to the creator, that after review, might be added to the archives of recipes on the website. This page gives a short description explaining the purpose to the user. </p>
                    <p class="paragraph">17. <u>Post a Recipe</u>: The user can submit a recipe. They have to fill in their name, their email address and the message they want to send. If not all of the fields are entered, the message cannot be submitted, and the form will show the user that this is the case through a message. (It does not actually send anything at this stage.)</p>
                    <p class="paragraph">18. <u>Submit Button</u>: When the user submits their form, the form will either confirm that everything is correct, or an error message wil pop up in the relevant place. I chose to stick with text, to make it as clear as possible, and to try and avoid confusion. </p>
                
            <img class="documentImage" src="../images/webDev/stepOne/articlesIndex.png" alt="Wireframe of the article index page showing the articles listed as well as how it will look when theused hovers over the article" title="Article Index Wireframe">
                <p class="paragraph">19. <u>Hover article</u>: When the user hovers over the article they want to select, the section increases in size slightly, as well as the text inside. The border also changes to the darker colour.</p>
                    <p class="paragraph">20. <u>Article</u>: The articles have a border around them that is a salmon pink colour. The heading is a dark maroon colour, and bigger in size (Also the same font as all the other headings in the website) and the other text is smaller and darker. The paragraph beneath the heading gives the user a small description of the article in order to let them know what the article is about. This final article will contain my essay. I though that the articles page might be a suitable place to keep it.</p>
                <img class="documentImage" src="../images/webDev/stepOne/article1.png" alt="Wireframe of the article and how it will be laid out with the text and the data visualisations placed accordingly" title="Article Wireframe">
                <img class="documentImage" src="../images/webDev/stepOne/article2.png" alt="Wireframe of the article and how it will be laid out with the text and the data visualisations placed accordingly" title="Article Wireframe">
                
                <p class="paragraph">21. <u>Heading and written parts of the article</u>: The heading is at the top of the page, in the center to bring attention to it. The written parts of the article will have a border around it in a darker maroon colour. This will separate it from the rest of the page and the other parts of the article.</p>
                    <p class="paragraph">22. <u>Data Visualisations</u>: The data visualisations will have a salmon pink border around them in order to separate them from the rest of the article, and so they have a clear container. </p>
                <img class="documentImage" src="../images/webDev/stepOne/aboutme.png" alt="Wireframe of the about page with the About me Section and the About WEbsite section" title="About page wireframe">
                <img class="documentImage" src="../images/webDev/stepOne/Aboutweb.png" alt="Wireframe of the about page with the About me Section and the About WEbsite section" title="About page wireframe">
                
                <p class="paragraph">23. <u>About Page</u>: The about page will contain information about the website as well as the creator and the reason for the website, giving more insight to what it is about.</p>
                    <p class="paragraph">24. <u>About Me</u>: This section will tell the user more about me, the creator of the website, as well as my motivations for creating the website.</p>
                    <p class="paragraph">25. <u>About the Website</u>: This section will give the user more information on the website and it’s purpose. It will also have a button that links to the designs page that will have more in depth descriptions on the design of the website and the motivations behind decisions made.</p>
                <img class="documentImage" src="../images/webDev/stepOne/designpage.png" alt="Design page wireframe part 1 that shows the wireframes layout as well as the styleguide layout with text explanation" title="Design Page wireframe part 1">
                
            <p class="paragraph">26. <u>Design Page</u>: This page will display all the design choices and reasoning for this website.</p>
                    <p class="paragraph">27. <u>Content</u>: The written content will be descriptions and reasonings for certain decisions. The wireframes and style guide will visually showcase the plans for the website with small descriptions that explain the elements found in the website.</p>
                <img class="documentImage" src="../images/webDev/stepOne/essay.png" alt="Essay wireframe that shows how the essay will be laid out on the essay page that will be found in the article section" title="Essay Wireframe">
                <p class="paragraph">28. <u>Essay</u>: The essay page (which will become one of the articles) shows my essay that was written for class, the tilte at the top and the content with a dark maroon border around it.</p>
                <img class="documentImage" src="../images/webDev/stepOne/Wireframe11.png" alt="Mobile wireframes showing the same wireframes as the main ones but in the formatting for mobile use" title="Mobile Wireframes">
                <p class="paragraph">29. <u>Mobile Wireframes</u>: These wireframes showcase what the website will look like for mobile usage. Everything is pretty much the same, except for some of the dividers, and the menus will be contained within hidden menus that are accessiblethrough the tap oif a button. Things that are shown next to each other on a computer screen will be beneath each other on mobile.</p>
                <h3>Other Decisions</h3>
                
                    <p class="listItem">All text will be Left aligned for ease of use and readability (Except some titles, where center alligned works better).</p>
                    <p class="listItem">Minimal images will be used for simplicity and to avoid overwhelming the user.</p>
                    <p class="listItem">The text for all headings is the Life Savers Google font.</p>
                    <p class="listItem">All other text is the Roboto Google font.</p>
                    <p class="listItem">The colour scheme was chosen for it’s contrast to each other, but also to match the relaxed and cute feel of the website. </p>
                
            <h3>Style Guide</h3>
            <img class="documentImage" src="../images/webDev/stepOne/Styleguide.png" alt="Style guide that shows the decisions made for each styling decision in the website" title="Style Guide">
            
            <p class="paragraph">Text on Style Guide:</p>
                
                    <p class="listItem">Typography</p>
                       
                            <p class="listItem sub">All the headings will be the Life Savers font. It is quite readable, so users should not struggle to read it, but it is a more stylized font, so it will not be used for larger pieces of text.</p>
                            <p class="listItem sub">Any content that will be made up of larger pieces of text will use the Roboto font. It is an easily readable font, but it does not give a serious feel (as it is on the rounder and smoother side), that fits into the style of the website very well. </p>
                        
                    
                    <p class="listItem">Colour Palette
                        
                            <p class="listItem sub">The while colour will be used for the background and any text found on a darker background.</p>
                            <p class="listItem sub">The salmon pink is mainly used for highlighting when the mouse hovers over buttons, as well as for borders around elements like recipes an articles.</p>
                            <p class="listItem sub">The Maroon colour is used for headings as well as for borders around text and borders around elements that are hovered over.</p>
                            <p class="listItem sub">The dark navy colour is used for content that is mainly made up of text.</p>
                            <p class="listItem sub">I chose these colours because they contrast well against each other, making them easy to differentiate. Below the colour palette is how people with different levels of colour blindness see them, and they still have good contrast against each other. The two darker colours are more similar, but they are never used on top of one another for this reason.</p>
                        
                    
                    <p class="listItem">Branding</p>
                        
                            <p class="listItem sub">The branding is on the simpler side. I did not see the need to have a specific logo, as the name is short and simple enough to use it as a logo. There are also not many images that are directly involved with the branding, but the image on the main page fits the colour palette quite well, as it uses similar colours. </p>
                        
                    <p class="listItem">Interactive Elements</p>
                        
                            <p class="paragraph">1. The navigation bar is at the top of the page. When hovering over the buttons, their backgrounds become salmon pink.</p>
                            <p class="paragraph">2. The filter buttons filter the recipes on the recipe page into different categories. These backgrounds also change colour when hovered over, and the buttons background turns pink when clicked on. The search bar enables user to search for specific recipes.</p>
                            <p class="paragraph">3. All the buttons are a maroon colour with white text and they enlarge when hovered over.</p>
                            <p class="paragraph">4. Recipes and articles have pink coloured borders, but enlarge and the borders become dark when the element is hovered over.</p>
                            <p class="paragraph">5. The footer has a background of salmon pink, and text in white. Their backgrounds become lighter when they are hovered over. </p>
                            <p class="paragraph">6. These input elements enable the user to add their information and send a recipe to be added to the archives. </p>
                        
                    
                    <p class="listItem">Other Design Decisions</p>
                        
                            <p class="listItem">The website is intentionally simple, to fit with its purpose of providing recipes without extra unnecessary information.</p>
                            <p class="listItem">The colour palette is simple but contrasting enough to make it easy to use. </p>
                            <p class="listItem">There are minimal images, they are only found in specific places, to make loading the website easier, and to avoid cognitive overload (The same with the colour palette and style of the website)</p>
                            <p class="listItem">The website is meant to be more relaxed and fun, and the colours and font styles show this.</p>
                            <p class="listItem">There are not many sharp corners in the website, again, to give a softer less serious feel. </p>
                        
        </section>`,
    },
    {
        id: "4",
        name: "First Portfolio Website",
        github: "https://github.com/Wits-Digital-Arts-Interactive-Media/WSOA3028A_2615283",
        link: "https://wits-digital-arts-interactive-media.github.io/WSOA3028A_2615283/",
        img: "../images/webDev/ChristineCharacter.jpg",
        status: "Completed",
        documentation: `
        <h3>Goal Alignment:</h3>
                
                <p class="listItem">My Goal:</p>
                    
                    <p class="listItem sub">I want a website that illustrates my skill-set, my experience and be a showcase of the work I have done. I want the users of the website to easily find 
                    what they need about me and easily be able to contact me. I want the website to be easily usable and not confusing to navigate, and I want it to display everything in a simple but effective way. I do not enjoy looking at websites that are too busy. So, I want to have a website that is not overwhelming to use or to look at.</p>
                    
                
                <p class="listItem">My User:</p>
                    
                    <p class="listItem sub">For now, the user will be who ever is marking the website. But the user I am keeping in mind is the person who will possibly hire me one day. Anyone 
                    looking for someone with my skill-set to work for them. I want to be able to direct possible employers to my website in order for them to see my experience, skills and abilities.</p>
                    
                
                <p class="listItem">My Content:</p>
                    
                    <p class="listItem sub">My portfolio of work that I have done (Important)</p>
                    <p class="listItem sub">My experience (Important)</p>
                    <p class="listItem sub">Information about me (extra)</p>
                    <p class="listItem sub">My contact information (relatively important)</p>
                    <p class="listItem sub">All the blogposts I have done in this time (for class)</p>
                    <p class="listItem sub">Design logs for this website (for class)</p>
                    <p class="listItem sub">The essays that I have written (for class)</p>
                    
                
                
                <h3>Information Structure:</h3>
                <img class="documentImage" src="../images/webDev/firstPortfolio/InformationStructure.png" alt="image of the information structure of my website." title="Information Structure">
            
                <h3>User Flow:</h3>
                    <img class="documentImage" src="../images/webDev/firstPortfolio/UserFlow.png" alt="image of the possible user flow of my website" title="User Flow">
            <h3>Notes on my aesthetics and design elements</h3>
                
                    <p class="listItem">My aesthetic:</p>
                        
                            <p class="listItem sub">For this website I am going for a darker, more sleek style website, with a few whimsical elements (mostly just my illustration of myself). I find websites like these easier to read, and very aesthetically pleasing. I would also like to have my personality weaved within it in some way or form. This will be achieved with the illustration, but also through my writing. I write in a more casual style, and this is because I tend to be more relaxed when talking about things I enjoy, so, I want to carry the feeling over in my website.</p>
                            <p class="listItem sub">I want the colour scheme to be simple and easily readable, and not too all over the place. It is very important to me to make sure that the colours on my website contrast, in order to make it easily readable for people who have eye problems (like me) as well as for people with colour blindness (several members of my family has this, and I have seen them struggle with this). I feel the colour scheme I have chosen contrasts enough for this to be possible. The colours I have chosen is black, white, mint green and forest green.</p>
                            <p class="listItem sub">I have always like the sleeker, more simplistic style websites, so this is what I am going for, but with a few things that make it more whimsical (illustration and writing style).</p>
                            <p class="listItem sub">I find that simpler websites with simple colour schemes, and that are not too busy, are easier to interact with. Websites that look busy are hard for me to read and interact with, so I want to avoid this with my website.</p>
                            <p class="listItem sub">I also find websites that have darker backgrounds easier to read on, as it is not as heavy on my eyes. And considering that I have to work on this website a lot, I think making it easier for me to read as well as anyone who has the same issue, is important. Thus my background will be black.</p>
                       
                    
                    <p class="listItem">Design elements</p>
                        
                            <p class="listItem sub">A navigation bar at the top of the screen that is always visible, even when you scroll down. This makes navigation very easy from where ever you are on the website, and the user does not have to go a long way around to get to where they need to be. This lowers the chance of them getting extremely frustrated in the long run.</p>
                            <p class="listItem sub">Colours that clearly contrast in order to make reading the text on the pages easier. The colours I want to use are white, mint green, forest green and black. It is a good mix of light and dark, that contrasts against each other. These are simple colours but they can be used effectively in order to make certain elements on the page pop.</p>
                            <p class="listItem sub">A limited colour palette, for the reasons given above.</p>
                            <p class="listItem sub">When we get to CSS, I would like to add white space, in order to space the text more to the middle of the page, but still left aligned, in order to make it easier to read.</p>
                            <p class="listItem sub">I am using the Helvetica font as it is easily readable, it does not have any frills that could be distracting or overwhelming and it can still look very professional.</p>
                            <p class="listItem sub">All the interactable buttons on the page will have rounded corners, for two reasons. Reason one is because it is softer looking, which adds to more of a whimsical look. The second reason is for consistency. All the interactable buttons have rounded corners and everything else has sharp corners. This subtly shows the user that these elements are different.</p>
                            <p class="listItem sub">The buttons that can be used have some sort of reactive element. In the navigaton bar and the blog navigation, the buttons change colour when you hover over it, and when you are on that page the colour of the button changes. The other buttons grow slightly and changes colour when the button is hovered over. This indicates to the user that these elements are interactable.</p>
                       
            <h3>Interface Elements</h3>
                    
                        <p class="listItem">Home Page:</p>
                        
                            <p class="listItem sub">The user will be able to scroll down to view everything on the page.</p>
                            <p class="listItem sub">There will be buttons on the top of the page for navigation.</p>
                            <p class="listItem sub">There will be buttons in each section as well that will take the user to the page that gives more information about the part that they are currently reading or looking at. Examples:
                                
                                    <p class="listItem subTwo">The small part at the start that will give more information about me will have a button that takes the user to the profile page.</p>
                                    <p class="listItem subTwo">There will be a most recent blog post, design log, essay and portfolio additions sections that displays the most recent posts that the user can then go to from the home page.</p>
                                
                            </p>
                            <p class="listItem">There will be links at the bottom of the page that link to social media profiles.</p>
                        
                        
                        <p class="listItem">Portfolio:</p>
                        
                            <p class="listItem sub">The user will be able to scroll down to view everything on the page.</p>
                            <p class="listItem sub">There will be buttons on the top of the page for navigation.</p>
                            <p class="listItem sub">Each portfolio piece will have a link that takes them to more information about the item and links to where the projects can be found.</p>
                            <p class="listItem sub">Within each of the individual portfolio item pages there will be buttons at the bottom of the page that takes the user to the next or the previous portfolio item.</p>
                            <p class="listItem sub">There will be links at the bottom of the page that link to social media profiles</p>
                        
                        
                        <p class="listItem">Profile:</p>
                        
                            <p class="listItem sub">The user will be able to scroll down to view everything on the page.</p>
                            <p class="listItem sub">There will be buttons on the top of the page for navigation.</p>
                            <p class="listItem sub">There will be a section that tells the user a bit more about me, as well as some of my inspirations.</p>
                            <p class="listItem sub">On this page there will be a CV section that will list the basic information, and when the user wants to know more about a certain thing, they can click on it and it will expand to show more information.</p>
                            <p class="listItem sub">There will be links at the bottom of the page that link to social media profiles.</p>
                        
                        
                        <p class="listItem">Design:</p>
                        
                            <p class="listItem sub">The user will be able to scroll down to view everything on the page.</p>
                            <p class="listItem sub">There will be buttons on the top of the page for navigation.</p>
                            <p class="listItem sub">Here there will be an index page, that shows all the different posts along with a summary and a link to the post.</p>
                            <p class="listItem sub">On each individual post, the post will be displayed and there will be buttons on the bottom of the page that takes the user to the next or the previous post.</p>
                            <p class="listItem sub">There will be links at the bottom of the page that link to social media profiles.</p>
                        
                        
                        <p class="listItem">Essays:</p>
                        
                            <p class="listItem sub">The user will be able to scroll down to view everything on the page.</p>
                            <p class="listItem sub">There will be buttons on the top of the page for navigation.</p>
                            <p class="listItem sub">On the main part of this page there will be the name of each essay, adn there will be a link that takes the user to the essay.</p>
                            <p class="listItem sub">On each individual essay, there will be buttons at the bottom of the page that takes the user to the next or the previous essay.</p>
                            <p class="listItem sub">There will be links at the bottom of the page that link to social media profiles.</p>
                        
                        
                        <p class="listItem">Blogs:</p>
                        
                            <p class="listItem sub">The user will be able to scroll down to view everything on the page.</p>
                            <p class="listItem sub">There will be buttons on the top of the page for navigation.</p>
                            <p class="listItem sub">Here there will be an index of blogposts with their names and summaries displayed. These wll have a link that takes the user to the relevant post.</p>
                            <p class="listItem sub">At the bottom of each individual post there will be buttons that takes the user to the previous or to the next post.</p>
                            <p class="listItem sub">There will be links at the bottom of the page that link to social media profiles</p>
                        
                        
                        
                    <h3>Goal</h3>
                    
                        <p class="listItem">My goal and aesthetic for this website
                            
                                <p class="listItem">
                                    My goal for this website is to showcase who I am, what I can do, my skills and qualifications all in one place, on a darker, sleek website that is easy to travers and easy to read, and where a user can easily find the information they need, without having to struggle to do so.
                                </p>
                            
                        </p>
                    
                    <h3>Style Guide</h3>
                    <table>
                        <tr>
                            <td>Font:</td>
                            <td>I initially wanted to use Aptos for my font. However, this was not possible. Thus I changed course and decided to use Helvetica. It is a very readable font, with no frills. This makes it easy for everyone to read. I specifically went for something simple, not only for its readability, but also because it still makes my website look sleek.</td>
                        </tr>
                        <tr>
                            <td>Font Colour:</td>
                            <td>If the background the text is on is dark, the text will be a light colour, but if the text is on a light coloured background, the text will be dark. This is to make the text easily readable in all situations, to prevent information from getting lost in translation.</td>
                        </tr>
                        <tr>
                            <td>Colour Scheme:</td>
                            <td>Black, White, Mint Green, Forest Green (as shown in wireframes). This is partly because I like these colours, but also because I feel that these colours contrast each other enough for them to be visible at all times, and when used correctly, make important elements pop against the background. These colours are also contrasting enough, that if someone with colour blindness were to use the filtering available on browsers, they will still be able to see everything on the screen.</td>
                        </tr>
                        <tr>
                            <td>Images:</td>
                            <td>There will be a few different types of images, some of them to do with the planning of the website, but most importantly the screenshots of the portfolio Items that will be shown on the portfolio page. Less importantly there will be the illustration of me that I drew, to add my personality into the website. I will not be adding any other images, as I think only the necessary images should be added, as not to make the use of bandwidth too extensive.</td>
                        </tr>
                        <tr>
                            <td>Font Sizing:</td>
                            <td>All the headings will be large in order to make it clear to the user where they are on the website, but all other text will be between 14 and 16, depending on the situation and the importance of the text.</td>
                        </tr>
                        <tr>
                            <td>Navigation Colours:</td>
                            <td>The navigation buttons will be white text on a black background under most circumstances, but the button that correlates with the current page will have a mint-green back ground, as to indicate on what page the user is currently. When the user hovers over the buttons, they will change colour, as to indicate that it is clickable. </td>
                        </tr>
                        <tr>
                            <td>Button Sizes:</td>
                            <td>The button sizes will be on the larger side, as to make them clearly visible and easy to find. I cannot explain the irritation that comes over me when a button is too small to find or even to press, so I would like to make sure they are all easy to interact with.</td>
                        </tr>
                        <tr>
                            <td>Button Colours:</td>
                            <td>The buttons will be coloured in light colours majority of the time, especially if it is a very important button, in order to show the user how important it is and make it easy to find. There are instances where it will be darker, to create visual interest.</td>
                        </tr>
                        <tr>
                            <td>Button Shapes:</td>
                            <td>The corners of all the buttons will be rounded. It gives them a bit of a softer look, which fits my style a little more. This also separates the interactable buttons from all the other elements that have sharp corners and are not interactable.</td>
                        </tr>
                        <tr>
                            <td>Information block colours:</td>
                            <td>The colours of these blocks will vary between white and mint green, as these are the lightest colours and will make the important text pop against the dark back ground the most.</td>
                        </tr>
                        <tr>
                            <td>Background Colours:</td>
                            <td>The background of the website is black, because I find it easier to read on websites that have dark backgrounds. I find reading on websites that have light backgrounds to be hard because it hurts my eyes, so I would like to prevent that for users using my website, andone way of doing that quite easily is to use a darker background.</td>
                        </tr>
                        <tr>
                            <td>Positioning of elements:</td>
                            <td>I will be making my text left aligned most of the time (unless it really needs to be different), because this is the easiest to read and the easiest to interact and engage with. The positioning of multiple items on a page will be done in a symmetric way, as I find that to be aesthetically pleasing and easier to traverse. (There will be a few places where it will lean more to a assymetrical alignment, but only where relevant).</td>
                        </tr>
                    </table>        
                       <h3>Final Wireframes</h3>
                       <div class="imageRow">
                        <img src="../images/webDev/firstPortfolio/FinalHomePagePart 1.png" alt="Home Page part 1 Wireframe. This image showcases the top part of the home page. There is an illustration and a small biography section that tells the user a little about me. It also has annotations that helps the user understand what each element on the image is." title="Home Page part 1 Wireframe" class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/FinalHomePagePart1Colour.png" alt="Home Page part 1 Colour Blockout. This showcases how the colours will be placed in the sections. This image showcases the top part of the home page. There is an illustration and a small biography section that tells the user a little about me. It also has annotations that helps the user understand what each element on the image is." title="Home Page part 1 Colour Blockout" class="documentImage">
                    
                </div>
                <div class="imageRow">
                         <img src="../images/webDev/firstPortfolio/FinalHomePagePart2.png" alt="Home Page Part 2 Wireframe. This image showcases the last part of the homepage. It showcases where the links for the most recent posts in the different sections will be placed. It also showcases the footer links that take the user to my social media links." title="Home Page part 2 Wireframe" class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/FinalHomePagePart2Clour.png" alt="Home Page Part 2 Colour Blockout. This showcases how the colours will be placed in the sections. This image showcases the last part of the homepage. It showcases where the links for the most recent posts in the different sections will be placed. It also showcases the footer links that take the user to my social media links." title="Home Page part 2 Colour Blockout" class="documentImage">
                    
                </div>
                <div class="imageRow">
                        <img src="../images/webDev/firstPortfolio/PortfolioPage.png" alt="Portfolio Page Wireframe. It showcases the different portfolio items and their links that lead to another page that showcases more information on the portfolio item. It then showcases my API application of a random fact generator API. It also showcases the footer links that take the user to my social media links." title="Portfolio Page Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/PortfolioPageColour.png" alt="Portfolio Page Colour Blockout. This showcases how the colours will be placed in the sections. It showcases the different portfolio items and their links that lead to another page that showcases more information on the portfolio item. It then showcases my API application of a random fact generator API. It also showcases the footer links that take the user to my social media links." title="Portfolio Page Colour Blockout." class="documentImage">
                    
                </div>
                <div class="imageRow">
                         <img src="../images/webDev/firstPortfolio/PortfolioGame.png" alt="Portfolio Game Item Wireframe. It showcases the portfolio item layout. The two screenshots and the place where the user will find more information and a reflection on the game. It also showcases the footer links that take the user to my social media links." title="Portfolio Game Item Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/PortfolioGame (2).png" alt="Portfolio Game Item Colour Blockout. This showcases how the colours will be placed in the sections. It showcases the portfolio item layout. The two screenshots and the place where the user will find more information and a reflection on the game. It also showcases the footer links that take the user to my social media links." title="Portfolio Game Item Colour Blockout." class="documentImage">
                   
                </div>
                <div class="imageRow">
                       <img src="../images/webDev/firstPortfolio/PortfolioWriting.png" alt="Portfolio Writing Item Wireframe. It showcases the portfolio item layout. It shows where the user will be able to find more information and reflection on the writing portfolio piece. It also showcases the footer links that take the user to my social media links." title="Portfolio Writing Item Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/PortfolioWritingColour.png" alt="Portfolio Writing Item Colour Blockout. This showcases how the colours will be placed in the sections. It showcases the portfolio item layout. It shows where the user will be able to find more information and reflection on the writing portfolio piece. It also showcases the footer links that take the user to my social media links." title="Portfolio Writing Item Colour Blockout." class="documentImage">
                    
                </div>
                <div class="imageRow">
                       <img src="../images/webDev/firstPortfolio/ProfilePagePart1.png" alt="Profile Page Wirframe Part 1. It showcases an illustration of me. Then it showcases where more biographical info as well as some of my inspirations can be found." title="Profile Page Part 1 Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/ProfilePagePart1Colour.png" alt="Profile Page Colour Blockout Part 1. This showcases how the colours will be placed in the sections. It showcases an illustration of me. Then it showcases where more biographical info as well as some of my inspirations can be found." title="Profile Page Part 1 Colour Blockout." class="documentImage">
                    
                </div>
                <div class="imageRow">
                        <img src="../images/webDev/firstPortfolio/ProfilePagePart2.png" alt="Profile Page Wirframe Part 2. This showcases my CV information divided in two. It also showcases the footer links that take the user to my social media links." title="Profile Page Part 2 Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/ProfilePagePart2Colour.png" alt="Profile Page Colour Blockout Part 2. This showcases how the colours will be placed in the sections. This showcases my CV information divided in two. It also showcases the footer links that take the user to my social media links." title="Profile Page Part 2 Colour Blockout." class="documentImage">
                   
                </div>
                <div class="imageRow">
                         <img src="../images/webDev/firstPortfolio/DesignPage.png" alt="Design Page Wireframe. It showcases the different design items and their links that lead to another page that showcases more information on the design item. It also showcases the footer links that take the user to my social media links." title="Design Log links page Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/DesignPageColour.png" alt="Design Page Colour Blockout. This showcases how the colours will be placed in the sections. It showcases the different design items and their links that lead to another page that showcases more information on the design item. It also showcases the footer links that take the user to my social media links." title="Design Log links page Colour Blockout." class="documentImage">
                   
                </div>
                <div class="imageRow">
                        <img src="../images/webDev/firstPortfolio/DesignLog.png" alt="Design Log Wireframe. It showcases the Design Log layout. It shows where the user will be able to find the writing for the design log. It also showcases the footer links that take the user to my social media links" title="Design Log Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/DesignLogColour.png" alt="Design Log Colour Blockout. This showcases how the colours will be placed in the sections. It showcases the Design Log layout. It shows where the user will be able to find the writing for the design log. It also showcases the footer links that take the user to my social media links" title="Design Log Colour Blockout." class="documentImage">
                    
                </div>
                <div class="imageRow">
                        <img src="../images/webDev/firstPortfolio/BlogsPage.png" alt="Blog Post Links Wireframe. It showcases the Blog Post Links layout. It showcases the different Blog Post items and their links that lead to another page that showcases more information on the Blog post item. It also showcases the footer links that take the user to my social media links" title="Blog Post Links Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/BlogsPageColour.png" alt="Blog Post Links Colour Blockout. This showcases how the colours will be placed in the sections. It showcases the Blog Post layout. It showcases the different Blog Post items and their links that lead to another page that showcases more information on the Blog post item. It also showcases the footer links that take the user to my social media links" title="Blog Post Links Colour Blockout." class="documentImage">
                    
                </div>
                <div class="imageRow">
                        <img src="../images/webDev/firstPortfolio/BlogPost.png" alt="Blog Post Wireframe. It showcases the Blog Post layout. It shows where the user will be able to find the writing for the Blog post. It also showcases the footer links that take the user to my social media links" title="Blog Post Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/BlogPostColour.png" alt="Blog Post Colour Blockout. This showcases how the colours will be placed in the sections. It showcases the Blog Post layout. It shows where the user will be able to find the writing for the Blog post. It also showcases the footer links that take the user to my social media links" title="Blog Post Colour Blockout." class="documentImage">
                    
                </div>
                <div class="imageRow">
                        <img src="../images/webDev/firstPortfolio/EssaysPage.png" alt="Essay Links Wireframe. It showcases the Essay links layout. It showcases the different Essay items and their links that lead to another page that showcases more information on the Essay item. It also showcases the footer links that take the user to my social media links" title="Blog Post Links Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/EssaysPageColour.png" alt="Essay Links Colour Blockout. This showcases how the colours will be placed in the sections. It showcases the Essay links layout. It showcases the different Essay items and their links that lead to another page that showcases more information on the Essay item. It also showcases the footer links that take the user to my social media links" title="Blog Post Links Colour Blockout." class="documentImage">
                    
                </div>
                <div class="imageRow">
                    <img src="../images/webDev/firstPortfolio/Essay.png" alt="Essay Wireframe. It showcases the Essay layout. It shows where the user will be able to find the writing for the Essay. It also showcases the footer links that take the user to my social media links" title="Essay Wireframe." class="documentImage">
                    
                        <img src="../images/webDev/firstPortfolio/EssayColour.png" alt="Essay Colour Blockout. This showcases how the colours will be placed in the sections. It showcases the Essay layout. It shows where the user will be able to find the writing for the Essay. It also showcases the footer links that take the user to my social media links" title="Essay Colour Blockout." class="documentImage">
                    </div>
        `
    },    
]

export const gameDevItems = [
    {
        id: "7",
        name: "Weight Prototype",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/weight-prototype",
        img: "../images/gameDev/WeightProto.png",
        status: "Completed",
        documentation: `
        <h3>Prompt</h3>
        <p class="listItem">Weight</p>
        <h3>Intent</h3>
        <p class="paragraph">For this project, we were tasked with taking the prompt and experimenting. We were tasked with expressing the intent of the project and the reflecting on our process.</p>
        <p class="paragraph">I want to be able to use physics in Unity to build my prototype. However, the physics system
        in Unity I find difficult to understand. Thus, I want to attempt to build a simple system that
        simulates physics. To do this, I want to create a mechanic where an object is elevated and
        lowered by adding objects that can incrementally lift and drop the object depending on the
        added element.</p>
        <p class="paragraph">Why do I find the Physics system difficult to understand?</p>
        <p class="listItem">There are several elements in the physics components in the editor itself, that I do not
        understand, either because I do not know how they work, or the terminology used to
        describe them is not intuitive to me. Some terms for example, Linear drag, angular
        drag, max linear correction, max angular correction, Baumgarte scale, sleep
        tolerance., etc.</p>
        <p class="paragraph">There were two ways I thought of to approach the above problem. Either I learn how to use
        the system (which is intimidating), or I ‘fake’ it in a sense, by using elements in the editor
        that I do understand, as well as code I do understand. The latter is what I am attempting to do.</p>
        <p class="paragraph">How will I be using the mechanic to attempt to do this?</p>
        <p class="listItem">By using the Unity grid that is visible in Unity2D as a large graph.</p>
        <p class="listItem">By using the object’s position on the graph to determine where it is in the space I am
        building, and then simulate floating and falling using vectors in code.</p>
        <p class="listItem">By using different elements (balloons, weights, parachutes, etc.) to lift the object,
        lower the object or slow the object’s descent.</p>
        <p class="listItem sub">These elements will all have certain properties in their code to achieve this.</p>
        <h3>Reflection</h3>
        <p class="paragraph">While making this prototype I was able to ‘fake’ the physics – build my own physics system
        – to a certain point. What I mean by this is that I could take certain elements and make them
        work similarly to what I think Unity Physics would be able to do, just in code, but after a
        certain point, it does not come off as realistic anymore.</p>
        <p class="paragraph">This is something that became obvious to me when I had the prototype play tested a few
        times by some of my peers. One of the glaring problems I had was making it look like the
        character was floating up and not just going up in position. I got an effect that was close, by
        slowly moving the character up when they were lifted by the balloon and drop faster when
        they are holding a weight.</p>
        <p class="paragraph">Something the players noted (and this is something I had realised as well), is that the fact that
        the character goes up or down a consistent amount, makes it feel unrealistic. I was struggling
        with this, as at first. In my head that is how it would work, and I do not think this is
        necessarily wrong, but I think if I had found a way to implement it differently, it would have
        come across more realistic. Maybe by making the character ‘look’ floatier. I could approach
        this through animations, or even use the code I already have to make the character slightly
        move up and down as they move along.</p>
        <p class="paragraph">So, when referring to the physics itself, I think it was successful to an extent. The ‘gravity’
        works; the character falls when there is no balloon attached or when it walks off a platform,
        even though there is no gravity attached to it in Unity. The character ‘floats’ or goes up when
        a floating device is added and goes down when the character’s weight is increased. However,
        it does not feel realistic. It does not feel as if the character has any weight to it. It feels like
        the character is an image that is changing positions on a graph. Which is what it is doing, but
        I was trying to make it look like it was using realistic physics, and I do not feel as if this was
        all that successful.</p>
        <p class="paragraph">If I were to go back, I would have looked at the following to make changes to, as to make it
        look more realistic in movement:</p>
        <p class="listItem">I would test implementing what Player 2 had mentioned in the playtest below; to
        decrease the speed that the character is moving at over time when it floats up.</p>
        <p class="listItem">I would experiment with giving the character itself weight, and see how that would
        change things, and if that would make it more realistic.</p>
        <p class="listItem sub">I would probably make a change in how I approached the problem of
        movement (vertical and horizontal) completely. I would have to do more
        research on this.</p>
        <p class="listItem">I would go back to the code used in the prototype to see if there was anything I could
        do differently or change to have make it look more realistic in game and make it
        easier to adjust if needed.</p>
        <p class="listItem">I would put more time into the graphics, in the sense that I think some of my above
        problems could be remedied by adding some small animations.</p>
        <p class="paragraph">Moving on to the other aspect I ended up also testing, the graphics. I was trying to use
        graphics to solidify the feeling and intent of the physics system.</p>
        <p class="paragraph">In my first prototype, I only used iconography. I made it look like one balloon when one
        balloon was used, and made it look like many balloons when there was more. I was surprised
        to see how effective the iconography ended up being. The players almost immediately knew
        what each element was supposed to do, and they said that when the graphic elements were
        added, it did clearly communicate what the element was supposed to do.</p>
        <p class="paragraph">In the second prototype, instead of using graphics that showed more balloons when more
        balloons were used, I used colours on the balloons to indicate something similar. The colours
        were changing as the lifting force got stronger. So, instead of many balloons, it was a stronger
        balloon, and this was indicated by the balloon getting redder as it got stronger. I made the
        prototype with the coloured balloons to evaluate a separate way of indicating the same thing,
        because maybe I would be surprised, and it would work better than just the graphics. I was,
        however, not surprised when this ended up being less effective than the iconography.</p>
        <p class="paragraph">The comment I got the most was that it was not clear what it was indicating, and the colour
        palette change was jarring. So, in the prototype I submitted, I opted for just submitting the
        first one with just the graphics, as the colours just did not land at all.</p>
        <p class="paragraph">In conclusion, I think it is possible for me to fake physics, or make my own physics system,
        but it is something I would have to work on further. The system I built is not where it should
        or can be and needs a lot more work. The basics are there, which is helpful, and I learned a lot
        about how it is possible to go around set systems in Unity and go down your own path.
        However, it was not as successful as I hoped it would be. I do not think it is a lost cause, and
        with some work, I might be able to have a system that would mean I never have to use Unity
        physics again, but for now, I do not have this magical system that I not only understand but
        achieves the same look and feel that Unity physics gives.</p>
        <p class="paragraph">But I did learn, however, that art in games does not have to be all that complicated.
        Sometimes simple iconography works and communicates the same thing that complex art
        does. Using only icons could even make a game that is fun and interesting to look at. Now, I
        do not think my art in this prototype is perfect. I think if there were a few animations when
        the character walked, or floated, or fell, it would look even more alive. For what I set out to
        do with the art in the prototype, however, I think it was successful, and I had fun making it.
        <p class="paragraph">Further expansion on how I approached my prototyping as well as my findings can be found
        below.</p>
        <h3>What I did:</h3>
        <p class="listItem">I started by writing down my idea for the mechanic and sketching some designs so I
        could see what I was aiming for. This enabled me to visualise what I wanted to do
        before jumping in and making the prototype.</p>
        <img class="documentImage" src="../images/gameDev/weight/Weight1.png" alt="IMAGES" />
        <p class="listItem">I then set aside around 3 hours to work on an initial prototype so I can see what it
        would look like and whether this would even work. I was keeping the article we read
        for the first week, How to Prototype a Game in Under 7 Days (Kucic, 2005), as well
        as what was said in class, so I was trying my hand at pushing out a prototype in a
        really short period of time as to not lose too much work if it didn’t work.</p>
        <p class="listItem">After the three hours I had three levels showing the three elements I mention above;
        doing what I wanted them to do for the most part. The code at this point is messy and
        all over the place, and it still needed work.</p>
        <p class="listItem">I had added some simple graphics to the game so what is happing within the prototype
        is also showcased in the graphics.</p>
        <p class="listItem">I then went back into the code to clean it up, make it simpler and easier for me to
        understand (especially if I were to come back to it in the future).</p>
        <p class="listItem">The first version used too many game objects to achieve the floating and falling
        effects.</p>
        <p class="listItem">The character itself had gravity on it in the rigid body, meaning that it was falling
        when it should not have and not floating in the manner, I wanted it to. So, I tried to fix
        this by adding the squares, and adding the floating and falling code to the square,
        which did not use gravity.</p>
        <p class="listItem">To illustrate:</p>
        <img class="documentImage" src="../images/gameDev/weight/Weight2.png"  alt="IMAGES" />
        <p class="listItem">I went back into unity, removed the squares, and just took off the gravity on the
        character itself. After doing this, the character was moving the way I wanted it too
        originally.</p>
        <p class="listItem">The game object setup now looks more like this:</p>
        <img class="documentImage" src="../images/gameDev/weight/Weight3.png"  alt="IMAGES" />
        <p class="listItem">The code is a lot neater than it was before, and the movement of the character is
        smoother.</p>
        <p class="listItem">After this, I started balancing the numbers of different elements on each object
        (balloon, parachute, etc.). The elements consist of the weight of the object (whether
        the object is lighter and will lift the character, or heavier, dropping the character), as
        well as speed (how the object effects the speed the character is moving in the
        horizontal direction).</p>
        <p class="listItem">The code could still use some work, I think there is still a lot to be improved, as I do
        not think where it is at now is the most effective or flexible for what I need it to do,
        but for now it works as it is.</p>
        <p class="listItem">Some terms to be found in the spread sheets:</p>
        <p class="listItem sub"><u>Weight:</u> This is what indicates how much the character floats up and how
        much the character lowers, depending on the element that is added.</p>
        <p class="listItem sub"><u>Speed:</u> This is how much the element effects the speed of the character
        moving upwards or downwards.</p>
        <p class="listItem sub"><u>Hinderance to movement:</u> how much an element hinders the horizontal
        movement of the character. For example, the weight that makes the character
        move slower when it goes left or right.</p>
        <p class="listItem sub"><u>Base speed of Character:</u> the speed of the character moving horizontally when
        no element is added.</p>
        <p class="paragraph">This first table contains the arbitrary
            numbers that I worked with
            while figuring out the system
            itself. They did not have much
            of a visual effect, so they need
            to be adjusted.</p>
        <table>
        <tr>
        <th>Term</th>
        <th>Balloon</th>
        <th>Big Balloon</th>
        <th>Parachute</th>
        <th>Weight (object)</th>
        </tr>
        <tr>
        <th>Weight</th>
        <td>2</td>
        <td>3</td>
        <td>0</td>
        <td>-1</td>
        </tr>
        <tr>
        <th>Speed</th>
        <td>0.5</td>
        <td>0.5</td>
        <td>0.5</td>
        <td>1.5</td>
        </tr>
        <tr>
        <th>Hinderence to Movement</th>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr>
        </table>
        <p class="paragraph">The next table shows better numbers, the speeds
        made more sense, and made
        the floating and the dropping
        look more realistic. The speed
        the weight is moving the
        character down at is a bit fast
        for my liking though. After playtesting I was
        advised that if I wanted the
        character to "feel" heavier,
        there should also be a
        hindrance to the vertical
        movement of the character.
        The Parachute hinderance is a
        bit much though.</p>
        <table>
        <tr>
        <th>Term</th>
        <th>Balloon</th>
        <th>Big Balloon</th>
        <th>Parachute</th>
        <th>Weight (object)</th>
        </tr>
        <tr>
        <th>Weight</th>
        <td>1.3</td>
        <td>3.9</td>
        <td>0</td>
        <td>-0.6</td>
        </tr>
        <tr>
        <th>Speed</th>
        <td>0.2</td>
        <td>0.2</td>
        <td>0.3</td>
        <td>2</td>
        </tr>
        <tr>
        <th>Hinderence to Movement</th>
        <td>0</td>
        <td>0</td>
        <td>0.5</td>
        <td>0.5</td>
        </tr>
        </table>
        <p class="paragraph">The speed of the weight was
        too fast. It looked a little out
        of place. The hinderance to the
        movement of the character in
        a vertical sense was too great
        with the parachute, so I made
        some adjustments to it.</p>
        <table>
        <tr>
        <th>Term</th>
        <th>Balloon</th>
        <th>Big Balloon</th>
        <th>Parachute</th>
        <th>Weight (object)</th>
        </tr>
        <tr>
        <th>Weight</th>
        <td>1.3</td>
        <td>3.9</td>
        <td>0</td>
        <td>-0.6</td>
        </tr>
        <tr>
        <th>Speed</th>
        <td>0.2</td>
        <td>0.2</td>
        <td>0.3</td>
        <td>1.5</td>
        </tr>
        <tr>
        <th>Hinderence to Movement</th>
        <td>0</td>
        <td>0</td>
        <td>0.7</td>
        <td>0.5</td>
        </tr>
        </table>
        <table>
        <tr>
        <th>Base Speed of character horizontal movement</th>
        <td>3</td>
        <td>This was too slow. With the changes in the above numbers, this
        needs to be adjusted so that the above numbers have a more obvious
        effect.</td>
        </tr>
        <tr>
        <th>Base Speed of character horizontal movement</th>
        <td>5</td>
        <td>This was better. The speed meant that the adjusted numbers above
        had a more evident effect and made 'floating' look more like
        floating, as well as falling more like falling.</td>
        </tr>
        </table>
        <p class="listItem">After working on the code, I started thinking about how I can communicate the
        character’s movement and how they are moving in other ways, other than just the
        speed the character is moving at.</p>
        <p class="listItem">The first thing I decided was to go with iconography as my graphics in the prototype.
        I did this because it is easy to produce quickly and change if necessary. I did not feel
        like the prototype needed complicated art, as it is just that, a prototype, but it did need
        graphics that still clearly communicated what each element was doing. This is
        achievable with simple shapes if you do it right.</p>
        <p class="listItem">I decided to concentrate on the balloons in following testing, as they have the most
        effect on the movement in this prototype.</p>
        <p class="listItem">I thought of two ways:</p>
        <p class="listItem sub">Graphics showing the amount and size of the balloons lifting the character.</p>
        <img class="documentImage" src="../images/gameDev/weight/Weight4.png"  alt="IMAGES" />
        <p class="listItem sub">Distinct colours of the balloons indicating how far up they are taking the
        character.</p>
        <img class="documentImage" src="../images/gameDev/weight/Weight5.png"  alt="IMAGES" />
        <p class="listItem">I asked a few people to playtest the two different prototypes and asked them a few
        questions about the graphics and the movement in the prototype.</p>
        <h3>Playtests</h3>
        <p class="paragraph">I asked three people to playtest the game. I asked them questions about the mechanic itself, as
        well as the two types of graphics used. The answers below are paraphrased from what they
        told me when I asked them the questions.</p>
        <p class="paragraph"><u>Player 1:</u></p>
        <p class="paragraph"><i>Was the amount of information given enough for you to figure out what you had to do?
        Why or why not?</i></p>
        <p class="paragraph">This player made it clear that the UI elements were both intuitive and not intuitive. There is
        no indication of where to go in each level. They suggested indicating a goal.</p>
        <p class="paragraph"><i>Was the graphics from prototype one or two better at communicating the effect of each
        element on the character?</i></p>
        <p class="paragraph">The parachute was not as clear in the first two levels as it was not necessary to use it. They
        suggested making a level with just the parachute in use. The balloons, however, were clear in
        the first prototype. They showed what they were supposed to achieve, and how quickly or
        how much. The second prototype with the colours, however, did not convey the same
        information as effectively. They feel that the prototype with just the graphics is better.</p>
        <p class="paragraph"><i>Does the character feel light when it needs to feel light and heavy when it needs to feel
        heavy? Why or why not?</i></p>
        <p class="paragraph">The character does not really 'feel' lighter or heavier. It is just moving up and down according
        to the 'weight' of the elements used. Something that could remedy this, is to make the
        character move slower in the horizontal direction as well, when they are carrying weight or
        using the parachute.</p>
        <p class="paragraph"><i>Is there anything you would have approached differently? What and how?</i></p>
        <p class="paragraph">Would have done something to make it feel 'heavier'. Examples, the character comes down
        faster, the character moves slower when walking if they hold a weight. Another thing would
        be to change the position of the graphics of the balloons, so it is clearer when more than one
        balloon type is used.</p>
        <p class="paragraph">After this first playtest, I made a few small adjustments before the following playtests.</p>
        <p class="listItem">I adjusted some of the numbers in the code that adjusted the speeds and weights.</p>
        <p class="listItem">I added a variable that slows the movement of the character when moving
        horizontally if the character is carrying weights.</p>
        <p class="listItem">And organised the UI elements in a different manner.</p>
        <p class="paragraph"><u>Player 2:</u></p>
        <p class="paragraph"><i>Was the amount of information given enough for you to figure out what you had to do?
        Why or why not?</i></p>
        <p class="paragraph">This player said that the balloons made it obvious what the goal of the element was but did
        not feel the same about the weight and the big ballon. They felt that these were not as clear in
        their intentions as they had no indication of how many are being used.</p>
        <p class="paragraph"><i>Was the graphics from prototype one or two better at communicating the effect of each
        element on the character?</i></p>
        <p class="paragraph">They felt as if the way the graphics in the first prototype were remarkably effective. The
        balloons with the stretched-out strings made it look like a helium balloon that is supposed to
        be lifting something. To them this came instinctually. The prototype with the colours was less
        clear. They understood that the higher the balloons went, the colour changed, however, this
        was not clear. They expressed that this would probably not be clear without further indication
        as to what it is supposed to mean. They also felt that the colour in the second prototype was
        jarring, compared to the first one where all the graphics were unified, as they were colourless
        and just icons.</p>
        <p class="paragraph"><i>Does the character feel light when it needs to feel light and heavy when it needs to feel
        heavy? Why or why not?</i></p>
        <p class="paragraph">The weight of the character feels constant as opposed to floaty or like it was falling. It feels
        universal as the character moves up and down certain amounts, and it does not really show
        how gravity effects the objects in the way people would expect. It does not feel realistic in
        that sense.</p>
        <p class="paragraph"><i>Is there anything you would have approached differently? What and how?</i></p>
        <p class="paragraph">This player would change the way the character moves up. It would start going up at a certain
        speed, and then slowly decelerate as the character approaches the goal height.</p>
        <p class="paragraph">This playtest brough forth a few good suggestions, that if I had more time to spend on the
        prototype, I would have tried my best to implements it. For example:</p>
        <p class="listItem">Maybe having the speed that the character floats up at decrease over time.</p>
        <p class="listItem">This might make it feel a bit more realistic.</p>
        <p class="paragraph"><u>Player 3:</u></p>
        <p class="paragraph"><i>Was the amount of information given enough for you to figure out what you had to do?
        Why or why not?</i></p>
        <p class="paragraph">This player said that the intentions of the prototype and the goal of the level was clear to
        them, possibly because they are someone who plays games on a regular. However, if it was
        someone who does not play games often, they might not find it intuitive.
        <p class="paragraph"><i>Was the graphics from prototype one or two better at communicating the effect of each
        element on the character?</i></p>
        <p class="paragraph">They felt that there was an unclear limit to how many balloons can be used, as the graphics
        for four balloons and the graphics for more balloons is the same. After playing around it
        became clear that there is no limit, but this was not clear from the beginning. The colour
        prototype made no sense however, and they preferred the first prototype with just the
        graphics.</p>
        <p class="paragraph"><i>Does the character feel light when it needs to feel light and heavy when it needs to feel
        heavy? Why or why not?</i></p>
        <p class="paragraph">It feels like the character is moving up and down in 'layers'. At a consistent amount. It does
        not feel floaty like a balloon should.</p>
        <p class="paragraph"><i>Is there anything you would have approached differently? What and how?</i></p>
        <p class="paragraph">There was not anything the player felt they would have done differently at this point.</p>
        <h3>References: </h3>
        <p class="paragraph">Kucic, M. (2005) How to Prototype a Game in Under 7 Days. [Online]. Available at:
        <a class="refLink" href="https://www.gamedeveloper.com/game-platforms/how-to-prototype-a-game-in-under-7-days#close-modal" target="_blank">
        https://www.gamedeveloper.com/game-platforms/how-to-prototype-a-game-in-under-7-days#close-modal</a> [Accessed on: 12 February 2024]</p>`
    },
    {
        id: "6",
        name: "Rope Tied Prototype",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/rope-tied-prototype",
        img: "../images/gameDev/RopeTied.png",
        status: "Completed",
        documentation: `
        <h3>Intent:</h3>
        <p class="paragraph">When playing a few cooperative multiplayer games, I found one mechanic that I found very
        intriguing. The mechanic consisted of two characters being tied together by a rope of sort and
        having to work together to achieve a certain goal, because they are tied together.</p>
        <p class="paragraph">Why did I find this mechanic to be so intriguing:</p>
        <p class="listItem">This is different to many multiplayer games I have played before, where you play
        together, but you do your own thing.</p>
        <p class="listItem">This forces players to collaborate in their solutions to puzzles.</p>
        <p class="listItem">I have made many playable characters that walk on their own, I have never made two
        playable characters that have to be attached to each other.</p>
        <p class="paragraph">Because I find this mechanic to be so interesting, I would like to try and replicate it in Unity.</p>
        <p class="paragraph">What would I like to achieve by replicating this mechanic:</p>
        <p class="listItem">Have a Player Controller that can be used in local multiplayer games.</p>
        <p class="listItem">Find out how to tie two characters together and make this aspect work with movement
        and jumping.</p>
        <p class="listItem">Figure out how to make it look like the two players are connected to each other.</p>
        <p class="listItem">Explore different ways this mechanic can be used.</p>
        <h3>Process:</h3>
        <p class="listItem">The first thing I did before starting my prototype is playing games.</p>
        <p class="listItem">I was unsure about what I wanted to do for this prototype. I was really struggling with the
        prompt, and it took me a while to find something I wanted to do. I was really feeling the
        creative block on this one.</p>
        <p class="listItem">The three games I played:</p>
        <p class="listItem sub">Bread & Fred (Demo) (2023): A game where two penguins are attached by a rope, and
        the players must work together to reach the top of the mountain. They can achieve this
        by jumping together, pulling each other, or swinging and flinging themselves onto
        platforms.</p>
        </p>Pikwip (2022): In this game the two players are attached to each other by a stretchy
        rope that enables the players to pull each other to wherever they are going.</p>
        <p class="listItem sub">Pico Park (2021): This is a game where 2-8 players must work together to finish levels.
        In some of the levels, the players are tied together.</p>
        <p class="listItem">The one mechanic that was present in all three of these games that I found the most
        intriguing is where the two players are attached to each other.</p>
        <p class="listItem">I especially enjoyed how the mechanic was implemented in Bread & Fred (2023).</p>
        <p class="listItem">In approaching the replication of this mechanic, I separated the mechanic into different
        parts. I approached all these step by step, to then achieve the mechanic in my own
        prototype:</p>
        <p class="listItem sub">I first created two playable characters and made them move and jump.</p>
        <p class="listItem subTwo">This was easy enough, and something I have done on multiple occasions for single
        player games, I just copied the code for player 2 and bound the movements to
        different keys.</p>
        <p class="listItem sub">Then I thought about the different things I want the players to be able to do when
        attached to each other:</p>
        <p class="listItem subTwo">I want the two players to be able to drag each other when only one of the players
        are moving.</p>
        <img class="documentImage" src="../images/gameDev/ropeTied/RopeTied1.png"  alt="IMAGES" />
        <p class="listItem subTwo">The two players will always be a certain distance from each other, no matter where
        and how the players move or jump, some of these movements might just be slightly
        hindered, because the players are tied together.</p>
        <img class="documentImage" src="../images/gameDev/ropeTied/RopeTied2.png"  alt="IMAGES" />
        <p class="listItem subTwo">When jumping separately, the jumping player should pull the stationary player.</p>
        <img class="documentImage" src="../images/gameDev/ropeTied/RopeTied3.png"  alt="IMAGES" />
        <p class="listItem subTwo">When players jump together however, they should be able to move farther, and
        more easily, making the jumping movement less hindered.</p>
        <img class="documentImage" src="../images/gameDev/ropeTied/RopeTied4.png"  alt="IMAGES" />
        <p class="listItem subTwo">Players should be able to grab onto platforms and walls, and then be able to swing if
        there are no obstacles in the way.</p>
        <img class="documentImage" src="../images/gameDev/ropeTied/RopeTied5.png"  alt="IMAGES" />
        <p class="listItem subTwo">Maybe the players would be able to fling themselves in a direction using the
        momentum of the swinging.</p>
        <img class="documentImage" src="../images/gameDev/ropeTied/RopeTied6.png"  alt="IMAGES" />
        <p class="listItem subTwo">The players will then be working together to achieve a goal. For this prototype, I
        thought that having a button they need to press would be the best.</p>
        <img class="documentImage" src="../images/gameDev/ropeTied/RopeTied7.png"  alt="IMAGES" />
        <p class="listItem">After analysing the different aspects of this mechanic and which ones I would like to use
        in my prototype, I started with trying to get the players tied together.</p>
        <p class="listItem">This was a feat. I started by trying to just keep a certain distance between the characters
        through code. The problems with this:</p>
        <p class="listItem sub">When player one moves left or right, it drags player two behind them.</p>
        <p class="listItem sub">However, the same does not happen when player two moves left or right. With player
        two, it’s like player one is stuck to the floor.</p>
        <p class="listItem sub">The above was achieved by only limiting the x-axis, which becomes a problem when
        jumping, because the y-axis is not limited.</p>
        <p class="listItem">To combat the problem with the jumping distance also being limited, I thought that
        maybe I should “draw” a circle around the objects and make sure the players stay in these
        distances. The problems with this:</p>
        <p class="listItem sub">Very similar issues to above, with one player pulling the other but not vice versa.</p>
        <p class="listItem sub">It also seemed as if this “circle” was limiting the momentum the players have when
        jumping in any direction.</p>
        <p class="listItem">I then remembered one of my peers mentioning that they were using a hinge joint in one
        of their games. I then tried to implement this as a rope between my two players. The
        problems with this:</p>
        <p class="listItem sub">The hinge joints would not connect to the players. No matter what I did, it just fell
        limp on the floor, or exploded into the different hinge parts that flung all over the
        screen. This is obviously not what I wanted.</p>
        <p class="listItem">Then I discovered the world of joints. This is something I have never heard of before and
        had never explored before. I came upon my saviour, the Spring Joint. I implemented this
        joint between the players, and it was almost perfect. The problems:</p>
        <p class="listItem sub">When the players reached a certain distance apart, they shoot back together… like a
        spring.</p>
        <p class="listItem">Because this was the closest to what I needed, I was determined to make it work. At this
        point, it was doing most of what I wanted it to do:</p>
        <p class="listItem sub">When a player moves and the other stands still, they drag the stationary one behind
        them.</p>
        <p class="listItem sub">When a player jumps and the other is stationary, the jumping player pulls the
        stationary player up.</p>
        <p class="listItem sub">When the players jumped together, they could jump higher and farther.</p>
        <p class="listItem">So, to solve the spring problem, I just disabled the Spring Joint when the players got
        within a certain distance of each other and enabled it again when they exited this range.</p>
        <p class="listItem">I also fiddled with the components within the Spring Joint to make the bounciness less,
        and this made for quite a decent rope (Shown in Balancing below).</p>
        <p class="listItem">I then moved on to the grabbing aspect of the mechanic. To achieve this effect, I used the
        colliders on the walls, platforms, and the players.</p>
        <p class="listItem">When the players touch the wall or platform and they press the grab button, this freezes
        the position of the player, causing a ‘grabbing’ effect.</p>
        <p class="listItem">From this, a different mechanic emerged. While the player is grabbing onto the platform,
        they can move around in and on it.</p>
        <p class="listItem">I though about removing this part or adjusting the code so that this was not possible, but
        while playtesting, I saw that this was a part that the players used to their advantage (and
        sometimes to their detriment), but it did not take away from the mechanic itself. So, I
        decided to leave it as is.</p>
        <p class="listItem">When thinking about how I would apply the swinging part of the mechanic, I found that
        the players were already swinging. I suspect that the movement as well as the Rigid
        Bodies were causing the swinging effect.</p>
        <p class="listItem">It was not as smooth as I would have liked it to be, but it worked, so I left it.</p>
        <p class="listItem">In playtesting, however, one of the play testers showed me what the AddForce function is
        and how it worked. I applied this to the movement of the players when they were in the
        air, and I got a smoother swinging effect, something a lot closer to what I was
        envisioning. (Thanks Jay!!)</p>
        <p class="listItem">After getting the mechanic where I wanted it to be, I started thinking about how I could
        play with the character shapes. How would this mechanic work if the characters were
        round? Or Triangular?</p>
        <img class="documentImage" src="../images/gameDev/ropeTied/RopeTied8.png"  alt="IMAGES" />
        <p class="listItem">I tried this by changing the shape of the sprite and the collider.</p>
        <p class="listItem">This did not make it to play testing, however, as it utterly sucked. There is no better way
        of describing it.</p>
        <p class="listItem sub">The circles rolled around and messed with the movement physics making the players
        move really slow, because they are constantly being pulled in the opposite direction.
        Not even moving both players in the same direction helped with this.</p>
        <p class="listItem subTwo">Jumping co-operatively was impossible, as with some of the jumps the players need
        to be on top of each other.</p>
        <p class="listItem sub">The triangles would not work with me when it came to the colliders, and the same
        issue as above with jumping was applicable here.</p>
        <p class="listItem">I made the decision that square players would be best for the prototype I am trying to
        achieve.</p>
        <h3>Balancing:</h3>
        <p class="paragraph">There was not too much to balance in this prototype, mostly just adjusting the positions of
        platforms in a level. That, however, was more of a ‘does this feel right’ situation, and less of a
        balancing numbers situation. There was some balancing to do though.</p>
        <p class="listItem"><u>Distance:</u> The distance that the Spring Joint aims to keep between the two players.</p>
        <p class="listItem"><u>Frequency:</u> How often the spring oscillates to keep the distance between the players
        where it needs to be. The higher this is, the less visible this bounce is.</p>
        <p class="listItem"><u>Speed:</u> The speed of the player movement.</p>
        <p class="listItem"><u>Jump:</u> The velocity of the player jump.</p>
        <table>
        <caption>This was the default for this unity
        component. The joint was too
        bouncy, and it would keep bouncing
        every few seconds as it tried to keep
        the distance consistent.</caption>
        <tr>
        <thead>
            <th colspan="2">ITERATION 1</th>
        </thead>        
        </tr>
        <tr>
        <thead>
            <th colspan="2">Spring Joint</th>
        </thead>        
        </tr>
        <tr>
        <th>Distance</th>
        <td>2</td>
        </tr>
        <tr>
        <th>Frequency</th>
        <td>1</td>
        </tr>
        </table>
        <table>
        <caption>The frequency of the bouncing has
        been increased, so it is not visible
        anymore, it only looks like the
        players are dragging each other now.
        The distance is too short still.</caption>
        <tr>
        <thead>
            <th colspan="2">ITERATION 2</th>
        </thead>        
        </tr>
        <tr>
        <thead>
            <th colspan="2">Spring Joint</th>
        </thead>        
        </tr>
        <tr>
        <th>Distance</th>
        <td>2</td>
        </tr>
        <tr>
        <th>Frequency</th>
        <td>8</td>
        </tr>
        </table>
        <table>
        <caption>These are perfect, the distance works
        for the puzzles that I made, as well
        as the goals I had for the mechanic.</caption>
        <tr>
        <thead>
            <th colspan="2">ITERATION 3</th>
        </thead>        
        </tr>
        <tr>
        <thead>
            <th colspan="2">Spring Joint</th>
        </thead>        
        </tr>
        <tr>
        <th>Distance</th>
        <td>3</td>
        </tr>
        <tr>
        <th>Frequency</th>
        <td>8</td>
        </tr>
        </table>
        <table>
        <caption>The speed in this version is perfect. I
        do not feel as if they need to move
        too fast. The jump is too short, it
        does not give the jumpy feeling I
        want it to have.</caption>
        <tr>
        <thead>
            <th colspan="2">ITERATION 1</th>
        </thead>        
        </tr>
        <tr>
        <thead>
            <th colspan="2">Player Movement</th>
        </thead>        
        </tr>
        <tr>
        <th>Speed</th>
        <td>2</td>
        </tr>
        <tr>
        <th>Jump</th>
        <td>2</td>
        </tr>
        </table>
        <table>
        <caption>The jump is better, but not there yet,
        it still is not high enough.</caption>
        <tr>
        <thead>
            <th colspan="2">ITERATION 2</th>
        </thead>        
        </tr>
        <tr>
        <thead>
            <th colspan="2">Player Movement</th>
        </thead>        
        </tr>
        <tr>
        <th>Speed</th>
        <td>2</td>
        </tr>
        <tr>
        <th>Jump</th>
        <td>7</td>
        </tr>
        </table>
        <table>
        <caption>The jump and the speed are where I
        want it to be for this prototype.</caption>
        <tr>
        <thead>
            <th colspan="2">ITERATION 3</th>
        </thead>        
        </tr>
        <tr>
        <thead>
            <th colspan="2">Player Movement</th>
        </thead>        
        </tr>
        <tr>
        <th>Speed</th>
        <td>2</td>
        </tr>
        <tr>
        <th>Jump</th>
        <td>10</td>
        </tr>
        </table>
        <h3>Playtests:</h3>
        <p class="paragraph">The playtests happened with two external players for each test. The answers the testers in
        each game gave were very similar to each other, so I combined them into one answer.</p>
        <p class="paragraph"><u>Play 1:</u></p>
        <p class="paragraph"><i>Is there any part of the mechanic that feels weird or wrong, what and why?</i></p>
        <p class="paragraph">The swinging is very difficult to figure out. The momentum is easy to lose. Maybe give a hint
        on how to do the swinging right? The bounce to the rope does feel a bit odd, as this also
        messes with the momentum in the swinging part of the mechanic. The blocks do not feel like
        they have enough weight, this might be because they spin.</p>
        <p class="paragraph"><i>If you have played Bread & Fred (2023), how does it feel different from the mechanic in
        that game?</i></p>
        <p class="paragraph">It felt like the characters had Spider Man attributes, as it felt like the characters are almost
        skittering. The stretch in the rope is nice and makes for a nice difference. The rope bounces in
        this, where it does not in Bread & Fred (2023).</p>
        <p class="paragraph"><i>Do you think these differences takes away or adds to the mechanic?</i></p>
        <p class="paragraph">The bounce feels wrong, and makes it hard to play, especially when swinging.</p>
        <p class="paragraph"><i>Is there anything you would have done differently?</i></p>
        <p class="paragraph">The grabbing key bind is in a weird position. It might be better to have player one’s grab
        button be E, and Player two’s Page Down.</p>
        <p class="paragraph"><u>Play 2:</u></p>
        <p class="paragraph"><i>Is there any part of the mechanic that feels weird or wrong, what and why?</i></p>
        <p class="paragraph">The swinging is very hard to control, even when you know how to get the rhythm that makes
        it work.</p>
        <p class="paragraph"><i>If you have played Bread & Fred (2023), how does it feel different from the mechanic in
        that game?</i></p>
        <p class="paragraph">The momentum carries through the swing less in this prototype than it does in the game,
        which also makes the swing harder to control. However, the fact that the characters can move
        through the platforms is cool and makes for an interesting thing to experiment with.</p>
        <p class="paragraph"><i>Do you think these differences takes away or adds to the mechanic?</i></p>
        <p class="paragraph">The fact that the characters can move through the platforms adds to the mechanic. It enables
        the players to find different anchor points to have different outcomes to the swing.</p>
        <p class="paragraph"><i>Is there anything you would have done differently?</i></p>
        <p class="paragraph">Instead of just using the movement and the rigid body for the swing, why not use AddForce?</p>
        <p class="paragraph"><u>Play 3:</u></p>
        <p class="paragraph"><i>Is there any part of the mechanic that feels weird or wrong, what and why?</i></p>
        <p class="paragraph">The spinning of the characters felt odd. It felt like the players would get in their own way
        when they swing and accidentally hit a platform. The spinning was also visually confusing, in
        trying to combat the spinning, the moving direction would change suddenly, and the
        momentum would be gone.</p>
        <p class="paragraph">These players wanted top walk on the roof, but that was not available.</p>
        <p class="paragraph"><i>If you have played Bread & Fred (2023), how does it feel different from the mechanic in
        that game?</i></p>
        <p class="paragraph">It feels very similar. The rope is more spring like. The physics does not feel the same, the
        flinging part that players can do in Bread & Fred does not seem possible with the physics in
        this prototype.</p>
        <p class="paragraph"><i>Do you think these differences takes away or adds to the mechanic?</i></p>
        <p class="paragraph">The flinging was not necessary, so the fact that the flinging was not as usable in this
        prototype, did not take away from the mechanic.</p>
        <p class="paragraph"><i>Is there anything you would have done differently?</i></p>
        <p class="paragraph"> Nothing really, besides taking out the springy-ness in the rope.</p>
        <p class="paragraph">After these playtests, the tester who suggested using AddForce showed me how this function
        works. I added it to the swinging aspect of the mechanic by detecting when the player was off
        the floor, which then enables them to swing. This made for a smoother, more controllable
        swinging</p>
        <h3>Reflection:</h3>
        <p class="paragraph">In replicating this mechanic, I learned so many things. I learned things about Unity, as well as
        about how to use certain functions in C#. I will be explaining what I learned through
        evaluating whether I reached my goals for this prototype.</p>
        <p class="paragraph"><i>Have a player controller that can be used in local multiplayer games.</i></p>
        <p class="paragraph">I now have a reusable Player Controller. This is something I will be able to use again, as well
        as add to if there are any other actions that I would like my players to be able to do. I will be
        able to use this Player Controller not only for local multiplayer games, but also for single
        player games if I just comment out the second player’s code. I had coded the two players’
        separately, so this would not be a problem.</p>
        <p class="paragraph"><i>Find out how to tie two characters together and make this aspect work with movement
        and jumping.</i></p>
        <p class="paragraph">This was quite the exploration while trying to figure out how to do this. The main thing I
        learned about here was joints. I had never used them before, and when starting this
        exploration, I only knew about the Hinge Joint. In excessive Googling, I found out about the
        world of joints. There are so many types, and I tested all of them.</p>
        <p class="paragraph">From Distance Joints to Fixed Joints to Relative Joints. I finally settled on a Spring Joint.
        This joint keeps the two objects a certain distance from each other, and when they exit this
        distance, they bounce back like a spring. With a little bit of code and some adjustments to the
        component, I was able to make a convincing rope, that only bounces a little bit.</p>
        <p class="paragraph">With the Spring Joint, the players can drag each other when moving, as well as when
        jumping.</p>
        <p class="paragraph"><i>Figure out how to make it look like the two players are connected to each other.</i></p>
        <p class="paragraph">This was another aspect that took me a while to figure out, but then I found line renderers.
        This is also something I have never used before. I also had never heard of it before. This gave
        me a simple way to illustrate that the two players are connected by a rope, without having to
        mess with hinge joints that just gave me a lot of trouble.</p>
        <p class="paragraph">It is not a dynamic, moving rope, but it does get the message across.</p>
        <p class="paragraph"><i>Explore different ways this mechanic can be used.</i></p>
        <p class="paragraph">I did not make any drastic discoveries here; however, I did accidentally implement a crawling
        aspect to the mechanic.</p>
        <p class="paragraph">When the players are grabbing onto a platform within the play area, they can move along this
        platform by moving left or right. At first, I wanted to remove this, but I decided to leave it to
        see what players would do with it.</p>
        <p class="paragraph">Players used this to their advantage, but also their detriment. It made new anchor points to
        swing from, but it also complicated grabbing onto another platform.</p>
        <p class="paragraph">I found in playtesting that players seemed to enjoy this and feels like it adds to the mechanic.</p>
        <p class="paragraph"><i>Anything else that I learned:</i></p>
        <p class="paragraph">I learned about the AddForce function in C#. I knew about this, but I was not sure how it
        worked, and since my swinging was working (albeit a bit janky), I did not know if it was
        necessary. However, one of the play testers showed me how it works, and how simple it
        actually is. I added it to my code, and it did wonders for the swinging aspect of the mechanic.
        I am eternally grateful to them for showing me how it works, as I now have another thing in
        my arsenal, and a better working mechanic and Player Controller.</p>
        <p class="paragraph">In conclusion, this prototype was a lot more valuable than I originally thought it would be. I
        was not sure if replicating a mechanic that I liked would be the best approach for me, but I
        was wrong. I learned so much through replicating this mechanic, and the things I learned are
        things I will use in the future, and I am sure they will make my future endeavours a little
        easier, even if it is by a minute amount. Every little bit counts. In the end I found a large
        amount of value in doing this, and I will probably do something like this (replicating
        mechanics I like) in the future.</p>
        <h3>References:</h3>
        <p class="paragraph">Bread & Fred Demo. (2023) PC [Game]. Apogee Entertainment. [Available at:
        <a class="refLink" href="https://store.steampowered.com/app/1607680/Bread__Fred/">https://store.steampowered.com/app/1607680/Bread__Fred/</a>]</p>
        <p class="paragraph">Pico Park. (2021) PC [Game]. TECOPARK. [Available at:
        <a class="refLink" href="https://store.steampowered.com/app/1509960/PICO_PARK/">https://store.steampowered.com/app/1509960/PICO_PARK/</a>]</p>
        <p class="paragraph">Pikwip. (2022) PC [Game]. cookiecrayon. [Available at: <a class="refLink" href="https://cookiecrayon.itch.io/pikwip">https://cookiecrayon.itch.io/pikwip</a>]</p>`,
    },
    {
        id: "5",
        name: "Platformer Juicyness Simulator",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/platformer-juicyness-simulator",
        img: "../images/gameDev/PlatformerJuice.png",
        status: "Completed",
        documentation:``
    },
    {
        id: "4",
        name: "Potato CULTivator (PotatoType)",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/idle-potatotype",
        img: "../images/gameDev/PotatoType.png",
        status: "Completed",
        documentation:``
    },
    {
        id: "3",
        name: "A Day in The Life of A Student",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/a-day-in-the-life-of-a-student",
        img: "../images/gameDev/StudentLife.png",
        status: "Completed",
        documentation:``
    },
    {
        id: "2",
        name: "Splatris",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/splatris",
        img: "../images/gameDev/Splatris.png",
        status: "Completed",
        documentation:``
    },
    {
        id: "1",
        name: "Arena Bash",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/arena-bash",
        img: "../images/gameDev/ArenaBash.png",
        status: "Completed",
        documentation:``
    },
    {
        id: "0",
        name: "Puck Defenders",
        github: "https://github.com/NightLocke15/Christine-Holt-Portfolio-Website",
        itch: "https://chris-the-awkward-elf.itch.io/puck-defenders",
        img: "../images/gameDev/PuckDefenders.png",
        status: "Completed",
        documentation:``
    }
]