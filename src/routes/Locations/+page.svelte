<script>
    import { enhance } from '$app/forms';
    /** @type {import('./$types').PageData} */
    export let data;


    let locations = data.response;
    let currentPage = 1;
    let itemsPerPage = 50;




    function prevPage() {
        currentPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
    }

    function nextPage() {
        var lastPage = Math.ceil(locations.length / itemsPerPage) ;
        currentPage = currentPage + 1 > lastPage ? lastPage : currentPage + 1;
    }



    function showModal(location,locationModal) {
        let modal = document.getElementById(locationModal);
        let director = document.getElementById("director");
        let producer = document.getElementById("producer");
        let address = document.getElementById("address");
        let enddate = document.getElementById("enddate");
        let startdate = document.getElementById("startdate");
        let filmname = document.getElementById("filmname");
        let filmtype = document.getElementById("filmtype");

        filmname.innerHTML = location.filmName;
        filmtype.innerHTML = location.filmType;
        director.innerHTML = location.filmDirectorName;
        producer.innerHTML = location.filmProducerName;
        address.innerHTML = location.address;
        startdate.innerHTML = location.startDate;
        enddate.innerHTML = location.endDate;


        modal.style.display = "block";
    }

    function closeModal() {
        let modal = document.getElementById("locationModal");
        modal.style.display = "none";
    }
    function closeModal2() {
        let modal = document.getElementById("locationModal2");
        modal.style.display = "none";
    }





let locationModal="locationModal";
let locationModal2="locationModal2";



</script>

<div class="container my-5">
    <h1 class="text-center">Liste des tournages</h1>

    <div class="locations">
        {#if data.role === "admin"}
        <td><a class="btn btn-outline-warning" href="/ajouter/"><span class="fa fa-plus-circle"></span> Ajouter</a></td>
        {/if}
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Nom du tournage</th>
                <th>Réalisateur</th>
                <th>Détails</th>
                {#if data.role === "admin"}
                    <th>Modifier</th>
                    <th>Supprimer</th>
                {/if}

            </tr>
            </thead>
            <tbody>
            {#each locations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as location}
                <tr>
                    <td>{location.filmName}</td>
                    <td>{location.filmDirectorName}</td>
                    <td><button class="btn btn-info" on:click={() => showModal(location,locationModal)}><span class="fa fa-list-ul"></span> Détails</button></td>
                    {#if data.role === "admin"}
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
                    <td><a class="btn btn-outline-info" href="/editor/{location._id}"><span class="fa fa-pencil-square-o"></span> Modifier</a></td>


                    <td>
                        <form use:enhance method="POST" action ="?/deleteLocation">
                            <input type="hidden" name="id" value="{location._id}">
                        <button class="btn btn-outline-danger" ><span class="fa fa-trash"></span> Supprimer</button>
                        </form>
                    </td>

                    {/if}

                </tr>
            {/each}
            </tbody>
        </table>

    </div>

    <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" on:click={prevPage}>Précédent</button>
        <button class="btn btn-secondary" on:click={nextPage}>Suivant</button>
    </div>
</div>

<div id="locationModal" class="modal">
    <div class="modal-content">
        <span class="close" on:click={closeModal}>&times;</span>
        <h5>Détails du tournage </h5>
        <table class="table table-striped">
            <tbody>
            <tr>
                <td>Nom du tournage :</td>
                <td id="filmname"></td>
            </tr>
            <tr>
                <td>Type :</td>
                <td id="filmtype"></td>
            </tr>
            <tr>
                <td>Nom du réalisateur :</td>
                <td id="director"></td>
            </tr>
            <tr>
                <td>Nom du producteur :</td>
                <td id="producer"></td>
            </tr>
            <tr>
                <td>Adresse :</td>
                <td id="address"></td>
            </tr>
            <tr>
                <td>Date de début :</td>
                <td id="startdate"></td>
            </tr>
            <tr>
                <td>Date de fin :</td>
                <td id="enddate"></td>
            </tr>

            </tbody>
        </table>


        <style>
            #locationModal {
                width: 40%;
                height: 60%;
                margin: auto;
                top: 0%;
                bottom: 0%;
                left: 20%;
                right: 20%;
                position: fixed;
            }
        </style>

    </div>
</div>

<div id="locationModal2" class="modal">
    <div class="modal-content">
        <span class="close" on:click={closeModal2}>&times;</span>
        <h5>Détails du tournage </h5>
        <table class="table table-striped">
            <tbody>
            <tr>
                <td>Nom du tournage :</td>
                <td>
                    <input type="text" id="filmname" v-model="location.filmName"  />
                </td>
            </tr>
            <tr>
                <td>Type :</td>
                <td>
                    <input type="text" id="filmtype" v-model="location.filmType"/>
                </td>
            </tr>
            <tr>
                <td>Nom du réalisateur :</td>
                <td>
                    <input type="text" id="director" v-model="location.filmDirectorName"/>
                </td>
            </tr>
            <tr>
                <td>Nom du producteur :</td>
                <td>
                    <input type="text" id="producer" v-model="location.filmProducerName"/>
                </td>
            </tr>
            <tr>
                <td>Adresse :</td>
                <td>
                    <input type="text" id="address" v-model="location.address"/>
                </td>
            </tr>
            <tr>
                <td>Date de début :</td>
                <td>
                    <input type="text" id="startdate" v-model="location.startDate"/>
                </td>
            </tr>
            <tr>
                <td>Date de fin :</td>
                <td>
                    <input type="text" id="enddate" v-model="location.endDate"/>
                </td>
            </tr>

            </tbody>
        </table>
        <button class="btn btn-outline-info" on:click={() => updateLocation(location)}>Enregistrer</button>
        <style>
            #locationModal2 {
                width: 40%;
                height: 80%;
                margin: auto;
                top: 0%;
                bottom: 0%;
                left: 20%;
                right: 20%;
                position: fixed;
            }
        </style>
    </div>
</div>
