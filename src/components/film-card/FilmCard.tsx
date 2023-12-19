import { FilmDescriptionType } from '../../types/types';

export default function FilmCard ({promoMovie, nameMovie, genre, releaseDate}: FilmDescriptionType): JSX.Element{
  return(
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={promoMovie} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{nameMovie}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{releaseDate}</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use href="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use href="#add"></use>
              </svg>
              <span>My list</span>
              <span className="film-card__count">9</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
