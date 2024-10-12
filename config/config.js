
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Home",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Research",
      link: "#research",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Hey, I'm Sankalp",
  description: "An electrical engineer focused on integrating AI into real-world applications.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/11f6X9eGAgBmm1V0r9n4nIGSM4tad4qDT/view?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am a final-year B.Tech student at the Indian Institute of Technology, Dharwad, majoring in Electrical Engineering. I am currently working as a research assistant at IIT Dharwad, working on Computer Vision problems. I love reading new research papers and implementing their findings into practical applications, constantly pushing the boundaries of my knowledge.",
    "Alongside my research, I have completed two internships at different startups, which I thoroughly enjoyed. I love the startup environment because of the sense of ownership it provides in developing and delivering the end-to-end product.",
    "When I'm not diving into research, I enjoy playing football and spending time gaming—though CSGO was my favorite until CS-2 ruined it!",
  ],
}

// export const work = {
//   title: "What I do",
//   cards: [
//     {
//       title: "Mobile App Development",
//       description: "I create pixel perfect iOS and Andriod apps using Flutter.",
//       icons: null,
//     },
//     {
//       title: "Web Development",
//       description: "I create responsive static websites using Reactjs.",
//       icons: null,
//     }
//   ],
// }

export const projects = {
  title: "Some of my Projects",
  cards: [
    {
      title: "Adding AI generated voiceovers to silent videos",
      description: "An easy to use script that uses VideoDB for scene indexing, OpenAI for script generation, and ElevenLabs for realistic audio voiceovers, transforming silent footage into dynamic and engaging content.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sankn123/AI-voiceovers-to-silent-videos",
        },
      ]
    },
    {
      title: "Chandrayaan-2 Image Super-Resolution",
      description: "A project focused on enhancing the resolution of images using Generative AI from Indian Space Research Organisation-ISRO's Chandrayaan-2 mission using real-life data.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/snjvn/Moon_Mapping_Cosmosoc",
        },
  
      ]
    },
    {
      title: "Paper Implementations",
      description: "Few of my implementations of key research papers in deep learning.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sankn123/DCGAN-Implementation",
        },
        {
          icon: faGithub,
          link: "https://github.com/sankn123/Very-deep-convolutional-networks-for-large-scale-image-recognition-Implementation",
        },
        {
          icon: faGithub,
          link: "https://github.com/sankn123/Transformer-From-Scratch",
        },
      ]
    }
  ],
}

export const research = {
  title: "Research Interests",
  description: [
    "I am working as a research assistant at IIT Dharwad, and my research interests lie in Computer Vision, Generative AI, and Natural Language Processing (NLP).",
    ],
  publications: [
      {
        title: "TM-PATHVQA: 90000+ Textless Multilingual Questions for Medical Visual Question Answering",
        description: "Published at Interspeech 2024. This work focuses on a speech-based VQA system with multilingual spoken questions. We proposed a dataset with 98,397 multilingual spoken questions and answers based on 5,004 pathological images along with 70 hours of audio, containing spoken questions in English, German & French. Finally, this work benchmarks and compares TM-PathVQA systems implemented using various combinations of acoustic and image features.",
        link: "https://www.isca-archive.org/interspeech_2024/rajkhowa24_interspeech.pdf", // replace with actual link if available
      },
      {
        title: "AMamba: Enhancing Audio Reprsentation Learning Using State Space Model (Under Review)",
        description: "Submitted to Neurocomputing journal. This work introduces the first-ever Audio Mamba, a state-space model.",
        link: "", // replace with actual link if available
      },
      {
        title: "Adaptive Knowledge Fusion Ratio-Based Knowledge Distillation (Under Review)",
        description: "Submitted to Pattern Recognition journal. This work highlights a limitation of standard knowledge distillation and introduces a trainable approach to the fusion ratio.",
        link: "", // replace with actual link if available
      },
      {
        title: "BadScan: An Architectural Backdoor Attack on Visual State Space Models (Under Review)",
        description: "Submitted to Winter Conference on Applications of Computer Vision (WACV) conference.",
        link: "", // replace with actual link if available
      },
      {
        title: "When Visual State Space Model Meets Backdoor Attacks (Under Review)",
        description: "Submitted to Winter Conference on Applications of Computer Vision (WACV) conference.",
        link: "", // replace with actual link if available
      }
    ],
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out directly by email at sankalp.nagaonkar@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:sankalp.nagaonkar@gmail.com",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Sankalp Nagaonkar",
  // description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@sankn123",
  description: "Electrical Engineer | AI Enthusiast | Computer Vision and Generative AI",
  cards: [
    {
      title: "Twitter",
      link: "https://x.com/sankn123/",
    },
  
    {
      title: "GitHub",
      link: "https://github.com/sankn123/",
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/sankalp-nagaonkar-18343823b/",
    },
    {
      title: "Google Scholar",
      link: "https://scholar.google.com/citations?user=sCr-DQgAAAAJ&hl=en",
    },
  ]
}