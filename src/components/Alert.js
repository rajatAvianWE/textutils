export default function Alert(params) {
    return (
        <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}