import { useState } from "react";
import "./index.css";

const faqs = [
  {
    id: 1,
    question: "Where are these chairs assembled ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hic quis amet accusantium deserunt modi dicta accusamus dolorem asperiores molestias.",
  },
  {
    id: 2,
    question: "How long do I have to return my chair ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hic quis amet accusantium deserunt modi dicta accusamus dolorem asperiores molestias.",
  },
  {
    id: 3,
    question: "Do you ship to countries outside the EU ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hic quis amet accusantium deserunt modi dicta accusamus dolorem asperiores molestias.",
  },
  {
    id: 9,
    question: "Do you ship to countries outside the EU ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hic quis amet accusantium deserunt modi dicta accusamus dolorem asperiores molestias.",
  },
];

export default function App() {
  const [openIds, setOpenIds] = useState([]); 

  function toggleFAQ(id) {
    if (openIds.includes(id)) {
  
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  }

  return (
    <div className="faq-container">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`faq-item ${openIds.includes(faq.id) ? "open" : ""}`}
          onClick={() => toggleFAQ(faq.id)}
        >
          <div className="faq-question">
            <span className="faq-number">
              {faq.id < 10 ? `0${faq.id}` : faq.id}
            </span>
            <span className="faq-text">{faq.question}</span>
            <span className="faq-icon">
              {openIds.includes(faq.id) ? "−" : "+"}
            </span>
          </div>

          {openIds.includes(faq.id) && (
            <p className="faq-answer">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
