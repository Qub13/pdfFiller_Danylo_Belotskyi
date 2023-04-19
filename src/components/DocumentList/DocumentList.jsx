import { Button } from "@/components/ui/Button/Button.jsx";
import "./DocumentList.scss";

export const DocumentList = () => {

  const data = [
    {
      title: "Rundofase",
      dateText: "08/08/2020",
      // Let`s imagine that we have data from API in ISO 8601 format and we converted it like this: "year-month-day"
      dateTime: "2020-08-08"
    },
    {
      title: "Genco Pura Olive Oil Company",
      dateText: "08/08/2020",
      dateTime: "2020-08-08"
    },
    {
      title: "Bubba Gump",
      dateText: "08/08/2020",
      dateTime: "2020-08-08"
    }
  ];

  return (
    <ul className="document-list">
      {data.map(item => (
        <li key={item.title} className="document-list__item">
          <div className="document-list__content">
            <img className="document-list__icon" src="/document-icon.svg" alt="Document icon" />
            <div className="document-list__info">
              <h3 className="document-list__title">{item.title}</h3>
              <p className="document-list__meta">Last Edited: <time className="document-list__date"
                                                                    dateTime={item.dateTime}>{item.dateText}</time></p>
            </div>
          </div>
          <div className="document-list__button">
            <Button />
          </div>
        </li>
      ))}

    </ul>
  );
};