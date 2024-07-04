// @own
import './styles.scss';

export const EmptyState = () => {
  return (
    <div className='empty-state'>
      <div className="container">
        <p className='empty-state--text'>
          There was an error, try again later.
        </p>
      </div>
    </div>
  )
}
