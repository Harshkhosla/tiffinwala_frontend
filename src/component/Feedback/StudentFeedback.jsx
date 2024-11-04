import React from 'react';

const StudentFeedbackData = [
  {
    name: 'Alice Johnson',
    role: 'UI-UX Designer',
    imagePath: '/assets/edtech/feedback/feedback_img1.png',
    description: 'Alice is a highly creative UI/UX designer...',
  },
  // Add more feedback data here...
];

function StudentFeedback() {
  return (
    <div className="max-w-[1320px] mx-4 xl:mx-auto py-[50px] md:py-[100px]">
      <div className="flex xl:block flex-col justify-center items-center">
        <div className="text-2xl md:text-3xl lg:text-[40px] font-semibold flex gap-2 relative">
          <p>Student</p>
          <p className="text-#365CCE">Feedback</p>
          <img
            src={'/assets/edtech/bottom_vector.svg'}
            alt="image bottom vector"
            width={150}
            height={50}
            className="absolute top-[24px] md:top-[35px] left-16 md:left-24"
          />
        </div>
        <div>
          <p className="text-primaryGray text-md my-4 text-center md:text-left">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>
      </div>
      <div className="flex gap-3 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-6">
          {StudentFeedbackData.map((item, index) => (
            <FeedbackCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeedbackCard({ item }) {
  return (
    <div className="relative shadow-custom-box-shadow hover:shadow-card p-5 w-[90vw] md:w-[500px] lg:w-[600px] rounded-[30px] select-none">
      <div className="flex gap-[10px] items-center">
        <div className="h-16 w-16 rounded-full overflow-hidden">
          <img src={item.imagePath} alt="image" height={64} width={64} />
        </div>
        <div>
          <p className="md:text-2xl font-semibold">{item.name}</p>
          <p className="text-xs md:text-base font-normal">{item.role}</p>
        </div>
      </div>
      <div className="mt-[23px]">
        <p>{item.description.slice(0, 250) + '...'}</p>
      </div>
    </div>
  );
}

export default StudentFeedback;
