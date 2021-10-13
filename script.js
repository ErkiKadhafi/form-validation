// Swal.fire({
//     title: "Error!",
//     text: "Do you want to continue",
//     icon: "error",
//     confirmButtonText: "Cool",
// });

function validateForm() {
    //validate name
    if (document.querySelector("#nama").value == "") {
        Swal.fire({
            text: "Nama Tidak Boleh Kosong",
            icon: "warning",
            confirmButtonColor: "#3085d6",
        });
        return false;
    } else {
        const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(document.querySelector("#nama").value)) {
            Swal.fire({
                text: "Nama Hanya Terdiri dari Huruf Alfabet",
                icon: "error",
                confirmButtonColor: "#3085d6",
            });
            return false;
        }
    }

    //validate nrp
    if (document.querySelector("#nrp").value == "") {
        Swal.fire({
            text: "NRP Tidak Boleh Kosong",
            icon: "warning",
            confirmButtonColor: "#3085d6",
        });
        return false;
    } else {
        const format = /^\d+$/;
        if (!format.test(document.querySelector("#nrp").value)) {
            Swal.fire({
                text: "NRP Hanya Terdiri dari Angka",
                icon: "error",
                confirmButtonColor: "#3085d6",
            });
            return false;
        }
        if (
            document.querySelector("#nrp").value.length == 10 &&
            document.querySelector("#nrp").value.length == 14
        ) {
            Swal.fire({
                text: "NRP harus berjumlah 10 atau 14 angka",
                icon: "error",
                confirmButtonColor: "#3085d6",
            });
            return false;
        }

        //validate no telp
        if (document.querySelector("#telp").value == "") {
            Swal.fire({
                text: "No Telp Tidak Boleh Kosong",
                icon: "warning",
                confirmButtonColor: "#3085d6",
            });
            return false;
        } else {
            const format = /^\d+$/;
            if (!format.test(document.querySelector("#telp").value)) {
                Swal.fire({
                    text: "No Telp Hanya Terdiri dari Angka",
                    icon: "error",
                    confirmButtonColor: "#3085d6",
                });
                return false;
            }
        }

        //validate alamat
        if (document.querySelector("#alamat").value == "") {
            Swal.fire({
                text: "Alamat Tidak Boleh Kosong",
                icon: "warning",
                confirmButtonColor: "#3085d6",
            });
            return false;
        }

        //validate fakultas
        if (document.querySelector("#fakultas").value == 0) {
            Swal.fire({
                text: "Tolong isi fakultas anda",
                icon: "warning",
                confirmButtonColor: "#3085d6",
            });
            return false;
        }

        //validate jurusan
        if (document.querySelector("#jurusan").value == 0) {
            Swal.fire({
                text: "Tolong isi jurusan anda",
                icon: "warning",
                confirmButtonColor: "#3085d6",
            });
            return false;
        }

        console.log(
            document.querySelector('input[name="status_vaksin"]:checked').value
        );
        console.log(
            document.querySelector('input[name="status_penyintas"]:checked').value
        );
    }
}

function changeJurusan() {
    const optionFakultas = document.querySelector("#fakultas");
    const fakultas = optionFakultas.value;

    const optionJurusan = document.querySelector("#jurusan");
    if (fakultas == "0") {
        optionJurusan.innerHTML = `
            <option value="0">Pilih Jurusan</option>      
        `;
    } else if (fakultas == "fsad") {
        optionJurusan.innerHTML = `
            <option value="fisika">Fisika</option>        
            <option value="matematika">Matematika</option>        
            <option value="statistika">Statistika</option>        
            <option value="kimia">Kimia</option>        
            <option value="biologi">Biologi</option>        
            <option value="aktuaria">Aktuaria</option>        
        `;
    } else if (fakultas == "ftirs") {
        optionJurusan.innerHTML = `
            <option value="teknik_mesin">Teknik Mesin</option>        
            <option value="teknik_kimia">Teknik Kimia</option>        
            <option value="teknik_fisika">Teknik Fisika</option>        
            <option value="teknik_industri">Teknik Industri</option>        
            <option value="teknik_material">Teknik Material</option>        
            <option value="teknik_pangan">Teknik Pangan</option>        
        `;
    } else if (fakultas == "ftspk") {
        optionJurusan.innerHTML = `
            <option value="teknik_sipil">Teknik Sipil</option>        
            <option value="arsitektur">Arsitektur</option>        
            <option value="teknik_lingkungan">Teknik Lingkungan</option>        
            <option value="pwk">Perencanaan Wilayah dan Kota</option>        
            <option value="teknik_geomatika">Teknik Geomatika</option>        
            <option value="teknik_geofisika">Teknik Geofisika</option>        
        `;
    } else if (fakultas == "ftk") {
        optionJurusan.innerHTML = `
            <option value="teknik_perkapalan">Teknik Perkapalan</option>        
            <option value="teknik_sistem_perkapalan">Teknik Sistem Perkapalan</option>        
            <option value="teknik_kelautan">Teknik Kelautan</option>        
            <option value="teknik_transportasi_laut">Teknik Transportasi Laut</option>        
            <option value="teknik_bangunan_lepas_pantai">Teknik Bangunan Lepas Pantai</option>                
        `;
    } else if (fakultas == "fteic") {
        optionJurusan.innerHTML = `
            <option value="teknik_elektro">Teknik Elektro</option>        
            <option value="teknik_biomedik">Teknik Biomedik</option>        
            <option value="teknik_komputer">Teknik Komputer</option>        
            <option value="teknik_informatika">Teknik Informatika</option>        
            <option value="sistem_informasi">Sistem Informasi</option>                
            <option value="teknologi_informasi">Teknologi Informasi</option>                
        `;
    } else if (fakultas == "vokasi") {
        optionJurusan.innerHTML = `
            <option value="teknologi_rekayasa_pengelolaan_dan_pemeliharaan_bangunan_sipil">Teknologi Rekayasa Pengelolaan dan Pemeliharaan Bangunan Sipil (Teknik Sipil D4)</option>        
            <option value="teknologi_rekayasa_konstruksi_bangunan_air">Teknologi Rekayasa Konstruksi Bangunan Air</option>        
            <option value="teknologi_rekayasa_manufaktur">Teknologi Rekayasa Manufaktur</option>        
            <option value="teknologi_rekayasa_konversi_energi">Teknologi Rekayasa Konversi Energi</option>        
            <option value="teknologi_rekayasa_otomasi">Teknologi Rekayasa Otomasi
            </option>                
            <option value="teknologi_rekayasa_kimia_industri">Teknologi Rekayasa Kimia Industri</option>                
            <option value="rekayasa_teknologi_instrumentasi">Rekayasa Teknologi Instrumentasi</option>                
            <option value="statistika_bisnis">Statistika Bisnis</option>                
        `;
    }
    // console.log(fakultas);
}
