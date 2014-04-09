        <div id="contact" class="page">
          <div id="contact_main" class="span6">
            <h2>Email Trebella!</h2>
            <p>We are always happy to hear from you and try our best to respond within 24 hours.</p>
            <div id="contact_form">
              <form id="emailform" action="email.php" method="post">
                <input name='name' type="text" id="name" class="input-medium input-block-level input-big" placeholder="Your Name" label="false" />
                <input name='email' type="text" id="email" class="input-medium input-block-level input-big" placeholder="Your Email Address" label="false" />
                <input name='subject' type="text" id="subject" class="input-medium input-block-level input-big" placeholder="Subject" label="false" />
                <textarea id="text" type="text" name="text" placeholder="Message: I'm so happy that you're writing to me! Please enter your message here."></textarea>
                <input type="submit" type="text" value="Submit" label='Submit', class='btn btn-large btn-primary btn-block mt5' />
              </form>
            </div>
          </div>
        </div> <!-- end div contact -->

        <?php //TODO: Create email.php; link this form via Ajax. Pending Blake's permission.
        ?>
