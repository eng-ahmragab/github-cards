
function Form({ username, handleUpdateUsername, handleAddCard, addDisabled }) {


    return (
        <form onSubmit={handleAddCard}>

            <div className="input-group">

                <input
                    type="text"
                    placeholder="GitHub Username ..."
                    className="form-control"
                    required
                    value={username}
                    onChange={handleUpdateUsername}

                />

                <div className="input-group-append">
                    <button type="submit" className="btn btn-success" disabled={addDisabled}> 
                        Add Card 
                    </button>
                </div>


            </div>

        </form>
    )
}

export default Form
