# My Google Meet Linktree

A simple and visually appealing Linktree-style webpage that redirects users to different Google Meet links based on their choices. The page provides a countdown before redirecting and uses a stylish gradient background and smooth animations to enhance the user experience.

## Features
- Custom Google Meet links for different activities (e.g., Mabar, Belajar, Bebas/Lainnya).
- Dropdown menu for choosing between different browsers (Edge and Chrome) with dynamic URL parameters.
- Smooth countdown timer before redirecting users.
- Elegant and modern design with a vibrant background and animations.
- Mobile-friendly and responsive.

## Demo

You can preview the webpage by visiting [Live Demo Link](#).

## How to Use

1. Clone this repository or download the project files.
2. Open the `index.html` file in any modern browser.
3. Click on the dropdown to select the activity you want to join.
4. Choose between the available browsers (Edge or Chrome).
5. Wait for the countdown to complete, and you will be redirected to the corresponding Google Meet link.

## Technologies Used
- **HTML** for structure.
- **CSS** for styling and animations.
- **JavaScript** for countdown timer and redirection logic.

## Setup

If you'd like to set up this project locally:

1. Clone this repository to your local machine using Git:
   ```bash
   git clone https://github.com/totiard/mylinktree.git
   ```
2. Open the `index.html` file in your browser.

## Customization

To modify the Google Meet links or add more activities:

1. Locate the corresponding link sections in the HTML:
   ```html
   <a href="javascript:void(0)" onclick="startRedirect('https://meet.google.com/your-link')">Join Mabar</a>
   ```
2. Update the URL with your desired Google Meet link and parameters.

### Modifying Dropdown Menu:
If you'd like to modify the dropdown options for different browsers or activities, simply update the dropdown content in the HTML:

```html
<div class="dropdown-content">
    <a href="javascript:void(0)" onclick="startRedirect('https://meet.google.com/your-link?authuser=4')">Edge</a>
    <a href="javascript:void(0)" onclick="startRedirect('https://meet.google.com/your-link?authuser=9')">Chrome</a>
</div>
```

## Contribution

If you'd like to contribute to this project:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created with ❤️ by [Your Name](https://github.com/totiard).
