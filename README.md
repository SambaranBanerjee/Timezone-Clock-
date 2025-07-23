# 🌟 World Clock Application

![Clock Preview](preview.gif)
## 📝 Description
A beautiful, interactive world clock application that displays time in both analog and digital formats with multiple visual themes. Users can:
- Switch between different timezones
- Toggle between analog and digital views
- Choose from various clock styles (standard, skeleton, roman numerals)
- Enable smooth sweeping second hand animation
- Enjoy theme-specific background designs

## ✨ Features
- **Multiple Timezones**: UTC, New York, London, Tokyo, and Indian Standard Time
- **Two Display Modes**: Elegant analog clock with moving hands and clean digital display
- **Visual Themes**: Unique backgrounds and color schemes for each timezone
- **Clock Styles**:
  - Standard with numbers
  - Minimalist skeleton style
  - Classic Roman numerals
- **Smooth Animations**: Option for sweeping second hand movement
- **Responsive Design**: Works on all device sizes
- **Interactive UI**: Easy-to-use controls with visual feedback

## 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript
- **Libraries**: 
  - [Day.js](https://day.js.org/) for date/time handling
  - [Day.js Timezone Plugin](https://github.com/iamkun/dayjs/blob/dev/docs/en/Plugin.md#timezone) for timezone support
  - [MicroModal](https://micromodal.vercel.app/) for dialog windows
  - [Font Awesome](https://fontawesome.com/) for icons

## 🚀 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/world-clock.git
   ```
2. Navigate to the project directory:
   ```bash
   cd world-clock
   ```
3. Open `index.html` in your browser

## 🎨 Customization
You can easily add more timezones by:
1. Adding new options to the `<select id="ZoneChange">` in HTML
2. Creating corresponding theme styles in CSS using the pattern:
   ```css
   .new-theme {
     /* background styles */
   }
   .new-theme #clock {
     /* clock container styles */
   }
   ```

## 📱 Responsive Design
The clock automatically adjusts to different screen sizes:
- Desktop: Large clock with full features
- Tablet: Slightly reduced size
- Mobile: Compact layout with adjusted controls

## 🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
