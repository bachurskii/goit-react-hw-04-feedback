import React, { useState } from 'react';
import Statistics from './statistics/statistics';
import Section from './section/section';
import Notification from './notification/notification';
import Feedback from './feedback/feedback';
import countTotalFeedback from './feedbackhelpers/countTotalFeedback';
import countPositiveFeedbackPercentage from './feedbackhelpers/countPositiveFeedbackPercentage';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const totalFeedback = countTotalFeedback(feedback);
  const positivePercentage = countPositiveFeedbackPercentage(feedback);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section>
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLieveFeedback={handleFeedback}
        />
      </Section>
      <Section>
        <Notification></Notification>
        <Statistics
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
};
