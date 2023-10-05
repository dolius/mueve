# mueve
Getting Started

mueve.js is a versatile JavaScript micro library designed to simplify the process of creating and orchestrating stunning animations and sequences within your HTML documents. With mueve.js, you can effortlessly compose complex animations using Animate.css classes, HTML elements, and JavaScript to achieve dynamic stories and presentations.

To get started with the Animate.css Sequencer library, follow these steps:

Download and include Animate.css in your HTML file if not already done.
Download the 'mueve.js' library and include it in your HTML.
Include 'your-library.css' for custom styles if needed.
You're ready to use the library to create animation sequences!
Author: David Echeverri
View demo
How to Use

The Mueve Sequencer library allows you to create animation sequences by using custom data attributes. Here's how to use it:

Add the following data attributes to your HTML sections to define the animation sequence:
data-entrance: Specifies the entrance animation class from Animate.css.
data-exit: Specifies the exit animation class from Animate.css.
data-stay: Specifies the duration (in seconds) for which the section stays visible.
Create a series of sections in your HTML document, each with the animation sequence attributes.
Include the library script in your HTML file.
Initialize the animation sequence in your JavaScript using the provided script.
For example:

<section data-entrance="fadeIn" data-exit="fadeOut" data-stay="2">
    <!-- Your content here -->
</section>
        
Code Examples
Here are some code examples demonstrating how to use the Animate.css Sequencer library:

        <section data-entrance="fadeIn" data-exit="fadeOut" data-stay="2">
            <!-- Your content here -->
        </section>

        <section data-entrance="bounce" data-exit="backOutDown" data-stay="5">
            <!-- Your content here -->
        </section>

        <section data-entrance="bounce" data-exit="bounceOut" data-stay="3">
            <!-- Your content here -->
        </section>
    
Configuration Options
You can configure the Animate.css Sequencer library by modifying the script as needed. For example, you can adjust the animation durations or add custom behavior:

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;

    function animateSection(index) {
        // Your animation logic here
    }

    // Start the animation sequence
    animateSection(currentIndex);
});
        
