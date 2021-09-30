import ProgrammingLanguageItem from './ProgrammingLanguageItem/ProgrammingLanguageItem';
import classes from './ProgrammingLanguagesSection.module.scss';

export default function ProgrammingLanguagesSection() {
  return (
    <section className={classes.ProgrammingLanguagesSection}>
      <h2>Software</h2>
      <div className={classes.ProgrammingLanguagesContainer}>
        <ProgrammingLanguageItem programmingLanguageTitle={'JavaScript'} proficiency={5} />
        <ProgrammingLanguageItem programmingLanguageTitle={'TypesScript'} proficiency={4} />
        <ProgrammingLanguageItem programmingLanguageTitle={'React'} proficiency={5} />
        <ProgrammingLanguageItem programmingLanguageTitle={'Vue'} proficiency={5} />
        <ProgrammingLanguageItem programmingLanguageTitle={'Python'} proficiency={5} />
        <ProgrammingLanguageItem programmingLanguageTitle={'Flutter'} proficiency={4} />
        <ProgrammingLanguageItem programmingLanguageTitle={'Node'} proficiency={4} />
        <ProgrammingLanguageItem programmingLanguageTitle={'MySQL'} proficiency={5} />
        <ProgrammingLanguageItem programmingLanguageTitle={'MongoDB'} proficiency={4} />
        <ProgrammingLanguageItem programmingLanguageTitle={'GIT'} proficiency={5} />
        <ProgrammingLanguageItem programmingLanguageTitle={'REST API'} proficiency={5} />
      </div>
    </section>
  );
}
