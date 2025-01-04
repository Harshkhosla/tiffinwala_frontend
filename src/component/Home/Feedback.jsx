import { FeedbackCard } from "../Feedbackcard";
import Slider from '../Slider'

export const Feedback = () => {

  const StudentFeedbackData = [
    {
      name: 'Alice Johnson',
      role: 'UI-UX Designer',
      imagePath: '/assets/images/feedback_img1.png',
      description:
        'Alice is a highly creative UI/UX designer with over 5 years of experience in crafting intuitive and engaging user interfaces. She has a deep understanding of user psychology and focuses on delivering exceptional digital experiences. Alice has worked on a wide variety of projects ranging from mobile applications to web platforms.',
    },
    {
      name: 'Michael Smith',
      role: 'Web Developer',
      imagePath: '/assets/images/feedback_img.png',
      description:
        'Michael is a skilled web developer specializing in front-end and back-end development with a knack for solving complex problems. He has extensive experience in building dynamic websites and web applications using technologies like HTML, CSS, JavaScript, and React.',
    },
    {
      name: 'Sophia Lee',
      role: 'Software Engineer',
      imagePath: '/assets/images/feedback_img1.png',
      description:
        "Sophia is a highly proficient software engineer with expertise in developing scalable software solutions. She has experience working with various programming languages such as Python, Java, and C++. Sophia's focus is on building robust applications that are easy to maintain and optimize for performance.",
    },
    {
      name: 'David Patel',
      role: 'Backend Developer',
      imagePath: '/assets/images/feedback_img.png',
      description:
        'David is a backend developer with a strong understanding of server-side technologies, database management, and APIs. His expertise includes working with Node.js, Express, and MongoDB, which allows him to build robust and scalable systems. He is passionate about optimizing back-end processes to improve performance and reliability.',
    },
    {
      name: 'Emma Davis',
      role: 'Frontend Developer',
      imagePath: '/assets/images/feedback_img1.png',
      description:
        'Emma is a dedicated frontend developer who excels at turning design concepts into fully functional websites and web applications. She has a strong grasp of modern front-end technologies like React, Vue.js, and Material UI, ensuring that her work is both visually appealing and technically sound.',
    },
    {
      name: 'James Carter',
      role: 'UI-UX Designer',
      imagePath: '/assets/images/feedback_img.png',
      description:
        'James is an experienced UI/UX designer who combines creativity with technical expertise to create engaging and user-centered designs. His work spans various industries, and he is known for his ability to simplify complex workflows while maintaining aesthetic appeal.',
    },
  ];

  return <div>

    <div className="flex  xl:block flex-col justify-center items-center">

      <div className="text-2xl md:text-3xl lg:text-[40px] font-semibold flex gap-2 relative">
        <p>Student</p>
        <p className="text-primaryColor">Feedback</p>
        <img
          src={'/assets/bottom_vector.svg'}
          alt="image bottom vector"
          width={150}
          height={50}
          className="absolute top-[24px] md:top-[35px] left-16 md:left-24"
        />
      </div>

      <div>
        <p className="text-gray-500 text-md  text-center md:text-left">
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>
      <Slider width={600} isUpdateWidth={true}>

      {StudentFeedbackData.map((item, index) => (
        <div key={index}>
          <FeedbackCard item={item} />
        </div>
      ))}
      </Slider>

    </div>

  </div>
}