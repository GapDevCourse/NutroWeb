from tkinter import *

window = Tk()
window.title("Nutroweb Chat Bot")
window.geometry('400x500')

def send():
    user_input = messagewindow.get()
    send_message = "You: " + user_input
    chatarea.insert(END, "\n" + send_message)

    if user_input.lower() == "hi":
        chatarea.insert(END, "\nBOT: Hello! How can I assist you with your diet and health today?")
    elif user_input.lower() == "what is your name":
        chatarea.insert(END, "\nBOT: My name is nutroweb, your friendly Nutroweb assistant.")
    elif user_input.lower() == "how are you":
        chatarea.insert(END, "\nBOT: I'm just a program, but I'm here to help you with your health journey!")
    elif user_input.lower() == "i am fine":
        chatarea.insert(END, "\nBOT: Good to hear that! How can I assist you further?")
    elif user_input.lower() == "what services do you offer":
        chatarea.insert(END, "\nBOT: We offer personalized diet plans, healthy recipes, and nutrition advice.")
    elif user_input.lower() == "how can i contact support":
        chatarea.insert(END, "\nBOT: You can reach our support team at support@nutroweb.com.")
    elif user_input.lower() == "what are your hours of operation":
        chatarea.insert(END, "\nBOT: Our hours are Monday to Friday, 9 AM to 5 PM.")
    elif user_input.lower() == "tell me about your products":
        chatarea.insert(END, "\nBOT: We have various health guides and meal plans available. Interested in any specific type?")
    elif user_input.lower() == "thank you":
        chatarea.insert(END, "\nBOT: You're welcome! If you have more questions, just ask.")
    elif user_input.lower() == "what is a balanced diet?":
        chatarea.insert(END, "\nBOT: A balanced diet includes a variety of foods: fruits, vegetables, whole grains, proteins, and healthy fats.")
    elif user_input.lower() == "how much water should i drink?":
        chatarea.insert(END, "\nBOT: It's generally recommended to drink at least 8 glasses (2 liters) of water a day.")
    elif user_input.lower() == "what are some healthy snacks?":
        chatarea.insert(END, "\nBOT: Some healthy snacks include nuts, yogurt, fruits, and veggie sticks with hummus.")
    elif user_input.lower() == "how do i lose weight safely?":
        chatarea.insert(END, "\nBOT: Aim for a balanced diet, regular exercise, and consult a healthcare professional for personalized advice.")
    elif user_input.lower() == "what are the benefits of exercise?":
        chatarea.insert(END, "\nBOT: Regular exercise helps with weight management, boosts mood, and improves overall health.")
    elif user_input.lower() == "can you suggest a healthy recipe?":
        chatarea.insert(END, "\nBOT: Sure! How about a quinoa salad with mixed veggies and a lemon vinaigrette?")
    elif user_input.lower() == "what should i eat for breakfast?":
        chatarea.insert(END, "\nBOT: A healthy breakfast could include oatmeal topped with fruits or a smoothie with spinach and bananas.")
    elif user_input.lower() == "do you have meal plans?":
        chatarea.insert(END, "\nBOT: Yes, we offer personalized meal plans based on your dietary needs. Would you like more information?")
    elif user_input.lower() == "how can i manage stress?":
        chatarea.insert(END, "\nBOT: Techniques like meditation, exercise, and healthy eating can help manage stress effectively.")
    else:
        chatarea.insert(END, "\nBOT: I didn't get that. Can you try asking differently?")

chatarea = Text(window, bg='white', width=50, height=8)
chatarea.place(x=6, y=6, height=385, width=370)

messagewindow = Entry(window, bg='white', width=30)
messagewindow.place(x=128, y=400, height=88, width=260)

send_button = Button(window, text="Send", bg='blue', activebackground='light blue', width=20, height=5, font=('Arial', 12), command=send)
send_button.place(x=6, y=400, height=81, width=120)

window.mainloop()
